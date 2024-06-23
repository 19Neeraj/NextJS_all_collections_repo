"use client";
import React, { useState } from "react";

// import { Result } from "postcss";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import { signup } from "@/app/services/userService";
import Link from "next/link";

export default function SignupPage() {
    const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email:"",
    password:"",
    about:""
  });
  console.log(user);

  const handleAdduser = async (event) => {
    event.preventDefault();
    

    try {
      console.log(user);
      const result = await signup(user);

      console.log(result);

      if (result.success == true) {
        toast.success("your successfuly Register ");
        setUser({
            name: "",
            email:"",
            password:"",
            about:""
        });
        router.push('/log_in');
      } else {
        toast.error("failed to  Register");
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to create the account");
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className=" mt-10 p-10 w-96 rounded-2xl shadow-inner shadow-textGreen">
        <h1 className=" font-bold text-white py-3">Sign up</h1>
        <form onSubmit={handleAdduser} className="flex flex-col gap-3">
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              className=" w-full py-1 rounded-lg text-black"
              placeholder="Enter your Name"
              id="name"
              name="name"
              value={user.name}
              required
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email ID</label>
            <input
            type="Email"
              className=" w-full py-1 rounded-lg text-black"
              placeholder="Enter your Email here"
              id="email"
              name="user_title"
              value={user.email}
              
              required
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <label htmlFor="user-title">password</label>
            <input
            type="password"
              className=" w-full py-1 rounded-lg text-black"
              placeholder="Enter your Password"
              id="password"
              name="user_title"
              value={user.password}
              required
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <label htmlFor="about">About</label>
            <textarea
              className=" w-full rounded-lg text-black"
              placeholder="About yourself"
              id="about"
              rows={3}
              name="user_content"
              value={user.about}
              onChange={(e) =>
                setUser({
                  ...user,
                  about: e.target.value,
                })
              }
              required
            ></textarea>
          </div>
          

          <div className="flex gap-3">
            <button className="px-4 py-2 w-24 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300">
              Register
            </button>
            <button
              onClick={(e) => setUser({ 
                name: "",
            email:"",
            password:"",
            about:""})}
              className="px-4 py-2 w-24 rounded-md text-textGreen text-[13px] border border-red-400  hover:bg-hoverColor "
            >
              clear
            </button>
          </div>
          <span>if you are already Registered <Link href='/log_in' className=" text-textGreen"> Log-in</Link></span>

        </form>
        {/* {JSON.stringify(user)} */}
      </div>
    </div>
  );
}
