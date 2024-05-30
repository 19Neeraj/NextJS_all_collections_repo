import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {

  const { title, content, userId } = await request.json();
  const authToken = request.cookies.get("authToken")?.value;
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data);
  try {
    const task = new Task({
      title, content, userId:data._id,
    });
    const createdTask = await task.save();
    return NextResponse.json({createdTask , success: true ,})
  } catch (error) {
    return NextResponse.json({
      message: 'failed to create',
      success: false,
    })
  }

}

export async function GET() {

  try {
    const task = await Task.find();
    return NextResponse.json(task, { status: 201 })
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: 'failed to create',
      success: false,
    })
  }

}