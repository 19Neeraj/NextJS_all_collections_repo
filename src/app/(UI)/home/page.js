'use client'

import { allPosts, userPosts } from "@/app/services/taskService";
import UserContext from "@/context/userContext";
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify";
import AllpostHome from "./AllpostHome";

export default function Home() {
  const [post,setPost]=useState([]);
   async function posthendle () {
    try {
      const posts = await allPosts();
      
      console.log(posts);
      setPost(posts);
    } catch (error) {
      console.log(error);
      toast.error('failed to load post');
    }

  }
  // console.log(post);
  // console.log(post[0]._id);
  useEffect(()=>{
      posthendle();
  },[])

  console.log(post);
  return (
    <div className="mt-24 flex gap-5 flex-wrap">
      {post.map((posts)=>(
    <div key={posts._id} >
        <AllpostHome title={posts.title} content={posts.content} date={posts.addedDate} userid={posts.userId} username={posts.userName}></AllpostHome>
        {/* <AllpostHome data={posts}></AllpostHome> */}
        
        </div>
      ))}
    </div>
  )
}
