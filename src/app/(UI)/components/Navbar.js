"use client";
import { userlogedout } from "@/app/services/userService";
import UserContext from "@/context/userContext";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "react-toastify";

export default function Navbar() {
  const loginuser =useContext(UserContext);
  console.log(loginuser.user);

  const logedout = async()=>{
    try {
      const logedres= await userlogedout();
      console.log(logedres);
      loginuser.setUser(undefined);
    } catch (error) {
      console.log(error);
      toast.error("Log out error");
    }

  }
  return (
    <nav className=" bg-blue-300 flex justify-between items-center py-3 px-5">
      <aside>
        <Link href="/">Task manger</Link>
      </aside>
      <aside>
      <ul className="flex gap-3">
        <li>
            <Link href='/home'>Home</Link>
        </li>
        <li>
            <Link href='/add-task'>Add Task</Link>
        </li>
        <li>
            <Link href='/show-task'>Show task</Link>
        </li>
       
      </ul>
      </aside>
      <aside className="flex gap-3">
      {/* {
        !loginuser.user && 
      } */}
        { loginuser.user ? (
          <>
          <Link href='/'><button className="px-5 bg-blue-500 rounded-md">{loginuser.user.name}</button></Link>
        <button onClick={logedout} className="px-5 bg-red-500 rounded-md">Log out</button>
          </>
        ):(
          <>
         <Link href='/log_in'><button className="px-5 bg-blue-500 rounded-md">Log in</button></Link>
        <Link href='/signup'><button className="px-5 bg-blue-500 rounded-md">Sign up</button></Link>
          </>
        )
      }
      </aside>
    </nav>
  );
}
