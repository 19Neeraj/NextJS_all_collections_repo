import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectdb } from "@/helper/database";

export async function POST(request) {
  // console.log("log api");
  connectdb();
  const { email, password } = await request.json();
  try {
    const user = await User.findOne({
      email: email,
    });
    // console.log(useremail);
    if (user == null) {
      throw new Error (' this email Id is not Register');
    } 
    const matched = await bcrypt.compare(password, user.password);
    // console.log(matched);
    // console.log(user.password);
    // console.log(password);
    if (!matched) {
        throw new Error ('password not matched');
    };
    const token = jwt.sign({
        _id:user._id,
        name:user.name,
    },process.env.JWT_KEY);
    // console.log(token);

    const response = NextResponse.json({authtoken:token, user:user,},{
        messaage: "success",
        status: 200,
        success:true,
      });
      console.log(response);
    response.cookies.set("authToken",token,{expiresIn:"1d",httpOnly:false,});
    
    return response;

    console.log(token);
   
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      messaage: error.message,
      status: 401,
      success:false,
    },{
      status:401
    });
  }
}
