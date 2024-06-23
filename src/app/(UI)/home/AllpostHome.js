import { getsingleuser } from "@/app/services/userService";
import UserContext from "@/context/userContext";
import React, { useContext, useEffect, useState,username } from "react";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaRegCircleUser } from "react-icons/fa6";
import Image from "next/image";

export default function AllpostHome(props) {


const [userinfo,setUserinfo]=useState();

//   const context = useContext(UserContext);
//   // console.log(context);
//   const { name, about, email } = context.user;
  const { title, content, date ,userid,username,posturl} = props;
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
<div className="mt-5 p-5 md:w-[300px] w-[270px]  max-w-58 rounded-2xl shadow-inner shadow-textGreen overflow-hidden">
<h1 className="font-bold text-textGreen py-3 -mt-5"> {title}</h1>
        <aside>
        <div className="w-full flex justify-center">
        <Image width={1000} height={1000} className="w-[260px] h-52 rounded-xl " src={posturl} alt="post img"></Image>
        </div>
          <div className=" p-5 w-full flex justify-center">
            <div className="flex justify-center gap-2 w-full">
              <p className="text-2xl">
              <FaRegCircleUser />
              </p>
              <h3 className=" font-semibold">{username}</h3>
              
            </div>
          </div>
          <div className="flex flex-col justify-between  ">
            <div className="">
              <h1 className="font-bold text-textGreen"> {title}</h1>
              <p className="text-sm h-48  overflow-y-scroll">{content}</p>
            </div>

            <h3 className="text-xs text-textGreen">{date}</h3>
          </div>
        </aside>
        
      
    </div>

  );
}
