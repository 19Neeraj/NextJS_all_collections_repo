import { connectdb } from "@/helper/database";
import User from '@/models/user';
import { NextResponse } from "next/server";

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
export async function POST(request, Response) {

  const { name, email, password, about } = await request.json()

  const user = new User({
    name, email, password, about
  });
  try {

    await user.save();
    NextResponse.json(user, { status: 201, });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      messaage: "failed to create the user",
      staus: false,
    })
  }


}



