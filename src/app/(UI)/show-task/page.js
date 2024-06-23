'use client'

import { deletePosts, userPosts } from "@/app/services/taskService";
import UserContext from "@/context/userContext";
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify";
import Posts from "./Posts";

export default function ShowTask() {
  const [post,setPost]=useState([]);
const context = useContext(UserContext);
console.log(context.user?._id);
const deletePosthendler = async (postid)=>{

  try {
    // alert("are you sure that you want to delete this post");
const res = await deletePosts(postid);
console.log(res);
toast.success('your post is deleted ');
setPost((prevPosts) => prevPosts.filter(post => post._id !== postid));  
  } catch (error) {
    console.log(error);
    return false;
  }
}
   async function posthendle (userId) {
    try {
      const posts = await userPosts(userId);
      console.log(posts);
      setPost(posts);
    } catch (error) {
      console.log(error);
      // toast.error('failed to load post');
    }

  }
  console.log(post);
  useEffect(()=>{
    if(context.user){
      posthendle(context.user._id);
    }
    
  },[context.user])
  return (
    <div className="mt-24 flex gap-5 md:flex-wrap mx-10 md:mx-5 items-center overflow-x-scroll ">
      {post.map((posts,key)=>(
    <div key={posts._id} >
        <Posts post={posts} deletePostHandler={deletePosthendler} ></Posts>
        </div>
      ))}
    </div>
  )
}
