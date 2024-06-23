"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Footer from "./Footer";
import { TiThSmall } from "react-icons/ti";
import Image from "next/image";

import { userlogedout } from "@/app/services/userService";
import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaRegCircleUser } from "react-icons/fa6";

export default function NavbarRes() {
  const [navshow, setNavshow] = useState(false);
  function onclickhandle() {
    setNavshow(!navshow);
  }

  const router = useRouter();

  const loginuser = useContext(UserContext);
  console.log(loginuser.user);

  const logedout = async () => {
    try {
      const logedres = await userlogedout();
      console.log(logedres);
      loginuser.setUser(undefined);
      router.push("/log_in");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Log out error");
    }
  };

  return (
    <>
      <div className="w-full shadow-navbarShadow h-20 1g:h-[12vh] fixed top-0 z-50 bg-bodyColor px-4">
        <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
         <Link href="/">
            <button className=" flex justify-center items-center gap-1 px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300">
              <FaRegCircleUser />
              {/* {loginuser.user.name} */}
              {loginuser.user ? loginuser.user.name : ""}
            </button>
          </Link>
          <div className=" hidden mdl:inline-flex justify-center gap-7">
            <ul className="flex text-[13px] gap-7">
              <Link
                href="/home"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  All post
                </motion.li>
              </Link>
              <Link
                href="/add-task"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Add post
                </motion.li>
              </Link>

              <Link
                href="/show-task"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  My posts
                </motion.li>
              </Link>
            </ul>
            {loginuser.user ? (
              <>
                <button
                  onClick={logedout}
                  className=" px-4 py-2 rounded-md text-textGreen text-[13px] border border-red-400  hover:bg-hoverColor duration-300"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
              <div>
                <Link href="/log_in">
                  <button className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300">
                    Log in
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="ml-2 px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300">
                    Sign up
                  </button>
                </Link>
                </div>
              </>
            )}
          </div>
         
          {/*  Small Icon section  */}
          <button className="mdl:hidden" onClick={onclickhandle}>
            {navshow ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <div className="text-3xl">
                <TiThSmall />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* for mobile response */}
      {navshow && (
        <div className=" mdl:hidden fixed w-2/3 right-0 h-[100vh] mt-[10vh] bg-bodyColor z-10 pt-4">
          <div className="flex flex-col  items-center gap-6">
            <ul className="flex flex-col text-[13px] gap-6">
            <Link 
                href="/home"
                onClick={onclickhandle}
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  All post
                </motion.li>
              </Link>
              <Link
              onClick={onclickhandle}
                href="/add-task"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Add post
                </motion.li>
              </Link>

              <Link
                href="/show-task"
                onClick={onclickhandle}
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  My posts
                </motion.li>
              </Link>
            </ul>
            {loginuser.user ? (
              <>
                <button
                  onClick={logedout}
                  className=" px-4 py-2 rounded-md text-textGreen text-[13px] border border-red-400  hover:bg-hoverColor duration-300"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
              <div>
                <Link href="/log_in" onClick={onclickhandle}>
                  <button className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300">
                    Log in
                  </button>
                </Link>
                <Link href="/signup" onClick={onclickhandle}>
                  <button className="ml-2 px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300">
                    Sign up
                  </button>
                </Link>
                </div>
              </>
            )}
            {/* <div className="mt-10">
              <Footer></Footer
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
