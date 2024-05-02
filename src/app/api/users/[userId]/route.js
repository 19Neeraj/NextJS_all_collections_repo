import  User  from '@/models/user';
import { NextResponse } from "next/server";

// get user 
export async function GET(request,{params}){
    const {userId}=params;
    try {
        const user =await User.findById(userId)
        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            messaage:"this user not exist ",
            staus:false,
        })
    }
}


// delete user api
export async function DELETE(request,{params}){
    const{userId}=params;
    try {
        await User.deleteOne(
            {
                _id:userId,
            });
            return NextResponse.json({
                messaage:"DELETE the user ",
                staus:true,
            })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            messaage:"failed to DELETE the user",
            staus:false,
        })
    }
}

// update the user
export async function PUT(request, { params }) {
    const { userId } = params;
    const { name, password, about } = await request.json();
  
  
    try {
  
      const user = await User.findById(userId);
      user.name = name;
      user.password = password;
      user.about = about;
      const updateduser = await user.save();
  
      return NextResponse.json(updateduser, { status: 201, });
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        messaage: "failed update ",
        staus: false,
      })
    }
  
  
  }