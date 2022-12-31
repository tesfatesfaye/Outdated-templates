import express from 'express';
import mongoose from 'mongoose';
import cors from'cors';
import TodoModel from './models/TodoModel.js';

const app=express();
const PORT=3005
 app.use(express.json());
 app.use(cors());
 mongoose.set('strictQuery',false)
 mongoose.connect('mongodb://127.0.0.1:27017/newTodo', {
    useNewUrlParser: true, 
	useUnifiedTopology: true 

 }).then(()=> console.log('Connected to MongoDB')).catch(console.error)


 app.get('/todoitems', async(req,res)=>{
    const items=await TodoModel.find();
    console.log(items.length)
    res.json(items)

 });

 app.listen(PORT, ()=>console.log("Server started on port 3005"))