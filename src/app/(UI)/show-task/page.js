'use client'

import { userPosts } from "@/app/services/taskService";
import UserContext from "@/context/userContext";
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify";
import Posts from "./Posts";

export default function ShowTask() {
  const [post,setPost]=useState([]);
const context = useContext(UserContext);
console.log(context.user?._id);
   async function posthendle (userId) {
    try {
      const posts = await userPosts(userId);
      console.log(posts);
      setPost(posts);
    } catch (error) {
      console.log(error);
      toast.error('failed to load post');
    }

  }
  console.log(post);
  useEffect(()=>{
    if(context.user){
      posthendle(context.user._id);
    }
    
  },[context.user])
  return (
    <div className="mt-24 flex gap-5 flex-wrap">
      {post.map((posts,key)=>(
    <div key={posts._id} >
        <Posts title={posts.title} content={posts.content} date={posts.addedDate}></Posts>
        </div>
      ))}
    </div>
  )
}
