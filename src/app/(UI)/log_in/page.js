
"use client";
import React, { useState } from "react";
import { login } from "../../services/userService";
import { Result } from "postcss";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';

export default function LogIn() {
    const router = useRouter();
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
      <div className=" bg-blue-300 mt-10 p-10 rounded-xl w-96">
        <h1 className=" font-bold text-white py-3">Log In</h1>
        <form onSubmit={handleLoginuser} className="flex flex-col gap-3">
          
          <div>
            <label htmlFor="loginData">Email ID</label>
            <input
            type="Email"
              className=" w-full rounded-lg"
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
              className=" w-full rounded-lg"
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
            <button className="bg-blue-500 px-5 rounded-xl hover:bg-blue-400">
              Log In
            </button>
            <button
              onClick={(e) => setLoginData({ 
              
            email:"",
            password:"",
            })}
              className="bg-red-600 px-4 py-1 rounded-xl hover:bg-red-400"
            >
              clear
            </button>
          </div>
        </form>
        {/* {JSON.stringify(user)} */}
      </div>
    </div>
  );
}
