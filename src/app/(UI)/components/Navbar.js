"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
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
        <Link href='/'><button className="px-5 bg-blue-500 rounded-md">Log in</button></Link>
        <Link href='/signup'><button className="px-5 bg-blue-500 rounded-md">Sign up</button></Link>
      </aside>
    </nav>
  );
}
