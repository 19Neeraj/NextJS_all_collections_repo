'use client'
import { BiSolidError } from "react-icons/bi";

export default function Errorpage({error,reset}) {
  return (
    <div className="w-full h-[90vh] bg-red-200 flex  justify-center items-center ">
      this is error page that we created <span className="text-red-600 text-5xl"><BiSolidError /></span>
    </div>
  )
}
