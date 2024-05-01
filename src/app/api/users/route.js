import { connectdb } from "@/helper/database";
import  User  from '@/models/user';
import { NextResponse } from "next/server";

connectdb();
export function GET(request) {
    const users = [
        {
            name: "Neeraj yadav",
            email: "N19@gmail.com"
        },
        {
            name: "Ram",
            email: "N19@gmail.com"
        }, {
            name: "Shyam",
            email: "N19@gmail.com"
        }
    ];
    return NextResponse.json(users);

}

export async function POST(request,Response) {

    const { name, email, password, about } = await request.json()

    const user = new User({
        name, email, password, about
    });
    try {

         await user.save();
        return Response = NextResponse.json(user,{ status:201,});
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            messaage:"failed to create the user",
            staus:false,
        })
    }
  

}

