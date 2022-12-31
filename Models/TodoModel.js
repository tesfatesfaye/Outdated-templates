import mongoose from 'mongoose';
const Schema=mongoose.Schema;

const TodoSchema=new Schema({
    text: {
        type: String,
        required:true
    },
    
    completed:{
    type:Boolean, 
    default:false
},
    timestamp:{
        type: String,
        default:Date.now()
    }
});

    const TodoModel=mongoose.model('TodoModel', TodoSchema)
    export default TodoModel
