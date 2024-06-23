import mongoose from "mongoose";

const TaskSchema = new  mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    addedDate:{
        type:Date,
        default:Date.now(),
        require:true
    },
    userId:{
        type:mongoose.ObjectId,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    posturl:{
        type:String,
        require:true
    }

});

export const  Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);

