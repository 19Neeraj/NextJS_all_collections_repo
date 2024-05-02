import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// get single task
export async function GET(request, { params }) {
    const { taskId } = params;

    try {

        const gttask = await Task.findById(taskId);
        return NextResponse.json(gttask);

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "failed to get single task"
        })
    }

}
// update the task
export async function PUT(request,{params}){
    const {taskId}=params;
     const{title,content}=await request.json();
     try {
        const UpdateTask= await Task.findById(taskId);
        UpdateTask.title=title;
        UpdateTask.content=content;

        const res = await UpdateTask.save();

        return NextResponse.json(res,{state:201});

     } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to update your task",
            success:false
        })
     }
}

// Delete task
export async function DELETE(request,{params}){
    const {taskId}=params;

    try {
        await Task.deleteOne(
            {
                _id:taskId
            }
        );
        return NextResponse.json({
            message:"task deleted "
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to delete the task",
            success:false
        })
    }
}