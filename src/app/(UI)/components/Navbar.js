"use client";
import { userlogedout } from "@/app/services/userService";
import UserContext from "@/context/userContext";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaRegCircleUser } from "react-icons/fa6";
export default function Navbar() {
  const router = useRouter();

  const loginuser = useContext(UserContext);
  console.log(loginuser.user);

  const logedout = async () => {
    try {
      const logedres = await userlogedout();
      console.log(logedres);
      loginuser.setUser(undefined);
      await router.push("/add-task");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Log out error");
    }
  };
  return (
    <nav className="flex justify-evenly items-center w-full shadow-navbarShadow h-16 1g:h-[12vh] fixed top-0 z-50 bg-bodyColor px-4">
      <aside>
        <Link href="/">Task manger</Link>
      </aside>
      <aside>
        <ul className="flex gap-3 ">
          <li>
            <Link className="hover:border-textGreen hover:border px-4 py-2 border border-bodyColor rounded-md " href="/home">Home</Link>
          </li>
          <li>
            <Link className="hover:border-textGreen hover:border px-4 py-2 border border-bodyColor rounded-md" href="/add-task">Add Post</Link>
          </li>
          <li>
            <Link className="hover:border-textGreen hover:border px-4 py-2 border border-bodyColor rounded-md" href="/show-task">My Posts</Link>
          </li>
        </ul>
      </aside>
      <aside className="flex gap-3">
        {/* {
        !loginuser.user && 
      } */}
        {loginuser.user ? (
          <>
            <Link href="/">
            
              <button className=" flex justify-center items-center gap-1 px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300">
              <FaRegCircleUser /> {loginuser.user.name}
              </button>
            </Link>
            <button onClick={logedout} className=" px-4 py-2 rounded-md text-textGreen text-[13px] border border-red-400  hover:bg-hoverColor duration-300">
              Log out
            </button>
          </>
        ) : (
          <>
            <Link href="/log_in">
              <button className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300">Log in</button>
            </Link>
            <Link href="/signup">
              <button className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300">Sign up</button>
            </Link>
          </>
        )}
      </aside>
    </nav>
  );
}
