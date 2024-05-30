import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";

export default function Posts(props) {
  const context = useContext(UserContext);
  // console.log(context);
  const { name, about, email } = context.user;
  const { title, content, date } = props;
  return (
    <div className="bg-blue-200 rounded-md mt-4 p-5 flex gap-5 w-[400px] px-5">
      <div className="flex items-center flex-col w-32">
        <p className="text-5xl">
          <FaUserAlt />
        </p>
        <h3 className="text-md font-semibold">{name}</h3>
        <h2 className="text-sm">{about}</h2>
      </div>
      <div className="flex flex-col justify-between">
      <div className=" text-left">
      <h1 className="font-bold"> {title}</h1>
        <p className="text-sm">{content}</p>
      </div>
        
        <h3 className="text-xs pl-28 ">{date}</h3>
      </div>
    </div>
  );
}
