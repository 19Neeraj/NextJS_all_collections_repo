"use client";
import React, { useState } from "react";
import { signup } from "../../services/taskService";
import { Result } from "postcss";
import { toast } from "react-toastify";

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email:"",
    password:"",
    about:""
  });
  // console.log(user);

  const handleAdduser = async (event) => {
    event.preventDefault();
    // console.log(user);

    try {
      const result = await signup(user);

    //   console.log(result);

      if (result.success == true) {
        toast.success("your post is created ");
        setUser({
            name: "",
            email:"",
            password:"",
            about:""
        });
        
      } else {
        toast.error("Email already exists");
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to create the post");
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className=" bg-blue-300 mt-10 p-10 rounded-xl w-96">
        <h1 className=" font-bold text-white py-3">Sign up</h1>
        <form onSubmit={handleAdduser} className="flex flex-col gap-3">
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              className=" w-full rounded-lg"
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
              className=" w-full rounded-lg"
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
              className=" w-full rounded-lg"
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
              className=" w-full rounded-lg"
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
            <button className="bg-blue-500 px-5 rounded-xl hover:bg-blue-400">
              Register
            </button>
            {/* <button
              onClick={(e) => setUser({ title: "", content: "" })}
              className="bg-red-600 px-4 py-1 rounded-xl hover:bg-red-400"
            >
              clear
            </button> */}
          </div>
        </form>
        {/* {JSON.stringify(user)} */}
      </div>
    </div>
  );
}
