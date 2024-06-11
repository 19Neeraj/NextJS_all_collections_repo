import { getsingleuser } from "@/app/services/userService";
import UserContext from "@/context/userContext";
import React, { useContext, useEffect, useState,username } from "react";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export default function AllpostHome(props) {


const [userinfo,setUserinfo]=useState();

//   const context = useContext(UserContext);
//   // console.log(context);
//   const { name, about, email } = context.user;
  const { title, content, date ,userid,username} = props;
// console.log(userid);
//   async function getallposthendle (userid) {
//     try {
//       const singleuser = await getsingleuser(userid);
//       console.log(singleuser);
//       setUserinfo(singleuser);
//     } catch (error) {
//       console.log(error);
//       toast.error('failed to load post');
//     }

//   }
//  useEffect(()=>{
//     if(userid){
//         getallposthendle(userid);
//     }
    
//   },[userid])
//   console.log(userinfo[0].email);
//   const {name,about}=userinfo;
  // console.log(username);
//   const {_id,name, email, password, about} = userinfo[0];
//   const {name,about}=userinfo;
  return (
    <div className="bg-blue-200 rounded-md mt-4 p-5 flex gap-5 w-[400px] px-5">
      <div className="flex items-center flex-col w-32">
        <p className="text-5xl">
          <FaUserAlt />
        </p>
        <p className="text-md font-semibold  ">{username}</p>
      
      </div>
      <div className="flex flex-col justify-between">
      <div className=" text-left">
      <h1 className="font-bold"> {title}</h1>
        <p className="text-sm">{content}</p>
      </div>
        
        <h3 className="text-xs pl-28 ">{date}</h3>
      </div>
    </div>
  );
}
