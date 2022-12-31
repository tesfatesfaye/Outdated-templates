import mongoose from 'mongoose';
const Schema=mongoose.Schema;

const ModelSchema=new Schema({
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

    const Model=mongoose.model('TodoModel', ModelSchema)
    export default Model
