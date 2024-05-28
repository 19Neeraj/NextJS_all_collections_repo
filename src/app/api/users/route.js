import { connectdb } from "@/helper/database";
import User from '@/models/user';
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

connectdb();
export async function GET(request) {
  let users = [];
  try {
    users = await User.find();

  } catch (error) {
    console.log(error);
    return NextResponse.json({
      messaage: "failed to Get the user",
      staus: false,
    })
  }
  return NextResponse.json(users);

}

// Create the user

export async function POST(request) {
  const { name, email, password, about } = await request.json();

  try {
    
    const emailvaild = await User.findOne({email});
    // console.log(emailvaild);
    if (emailvaild) {
      // If email exists, return a 400 Bad Request response
      
      return NextResponse.json({
        message: "Email already exists",
        success: false,
      });
    } else {
      // If email doesn't exist, create the new user
      
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // console.log(hashedPassword);
      const user = new User({ name, email, password:hashedPassword, about });
      
      await user.save();
      return NextResponse.json({user,success: true });
    }
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      return NextResponse.json({
        message: "Email already exists",
        status: false,
      }, { status: 400 });
    } else {
      console.log(error);
      return NextResponse.json({
        message: "Failed to create user",
        status: false,
      }, { status: 500 });
    }
  }
}



