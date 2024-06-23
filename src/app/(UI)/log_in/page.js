
"use client";
import React, { useContext, useState } from "react";
import { login } from "../../services/userService";
import { Result } from "postcss";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import UserContext from "@/context/userContext";
import Link from "next/link";


export default function LogIn() {
    const router = useRouter();
    const context = useContext(UserContext)
  const [loginData, setLoginData] = useState({
    
    email:"",
    password:"",
   
  });
  console.log(loginData);


 
  const handleLoginuser = async (event) => {
    event.preventDefault();
    // console.log(user);

    try {
      const result = await login(loginData);

      console.log(result);

      if (result.authtoken) { 
        toast.success("your successfuly login ");
        setLoginData({
            
            email:"",
            password:"",
           
        });
        context.setUser(result.user);
        router.push('/home');
      } else {
        toast.error("check your details");
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to log in");
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className=" mt-10 p-10 w-96 rounded-2xl shadow-inner shadow-textGreen">
        <h1 className=" font-bold text-white py-3">Log In</h1>
        <form onSubmit={handleLoginuser} className="flex flex-col gap-3">
          
          <div>
            <label htmlFor="loginData">Email ID</label>
            <input
            type="Email"
              className=" w-full py-1 text-black rounded-lg"
              placeholder="Enter your Email here"
              id="loginData_email"
              name="loginData"
              value={loginData.email}
              
              required
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <label htmlFor="loginData-title">password</label>
            <input
            type="password"
              className=" w-full py-1 text-black rounded-lg"
              placeholder="Enter your Password"
              id="loginDatapass"
              name="user_title"
              value={loginData.password}
              required
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                })
              }
            ></input>
          </div>
          
          

          <div className="flex gap-3">
            <button className="px-4 py-2 w-24 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300">
              Log In
            </button>
            <button
              onClick={(e) => setLoginData({ 
            email:"",
            password:"",
            })}
              className="px-4 py-2 w-24 rounded-md text-textGreen text-[13px] border border-red-400  hover:bg-hoverColor "
            >
              clear
            </button>
          </div>
          <span>if you are not Registered <Link href='/signup' className=" text-textGreen">Create account</Link></span>
          
        </form>
        {/* {JSON.stringify(user)} */}
      </div>
    </div>
  );
}
