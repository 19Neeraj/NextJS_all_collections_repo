"use client";
import { UpdatePosts, deletePosts } from "@/app/services/taskService";
import UserContext from "@/context/userContext";
import React, { useContext, useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import uploadFile from "../../detabases/uploadFile";
import ConfirmationModal from "../components/ConfirmationModal";
import Image from "next/image";

export default function Posts({ post, deletePostHandler }) {
  const router = useRouter();
  const [editModal, setEditModal] = useState(false);
  const context = useContext(UserContext);
  // console.log(context);
  const { name, about, email } = context.user;
  const { title, content, addedDate, _id, posturl } = post;

  const EditModal = () => {
    setEditModal(!editModal);
  };
  const [openmodal, setOpenmodal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const handleDelete = async () => {
    await deletePostHandler(_id);
    setOpenmodal(false);
  };

  return (
    <main>
      <div className=" p-5 md:w-[300px] w-[270px] max-w-58 rounded-2xl shadow-inner shadow-textGreen overflow-hidden">
        <span className="flex justify-end  h-8 gap-4 ">
          <FaRegEdit
            onClick={(e) => setEditModal(true)}
            className=" text-textGreen cursor-pointer hover:text-green-700"
          />
          <MdDelete
            className="text-red-500 cursor-pointer hover:text-red-800"
            // onClick={() => deletePostHandler(_id)}
            onClick={(e) => setOpenmodal(true)}
          />
        </span>
        <aside>
          <div className="w-full flex justify-center">
          
            <Image width={1000} height={1000}
              className="w-[260px] h-52 rounded-xl "
              src={posturl}
              alt="post img"
            ></Image>
          </div>
          <div className=" p-5 w-full flex justify-center">
            <div className="flex justify-center items-center gap-5 w-full">
              <p className="text-2xl">
                <FaRegCircleUser />
              </p>
              <div>
                <h3 className="text-md font-semibold">{name}</h3>
                <h2 className="text-[10px]">{about}</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between  ">
            <div className="">
              <h1 className="font-bold text-textGreen"> {title}</h1>
              <p className="text-sm h-48  overflow-y-scroll">{content}</p>
            </div>

            <h3 className="text-xs text-textGreen">{addedDate}</h3>
          </div>
        </aside>
      </div>
      {editModal && (
        <div className=" rounded-xl shadow-2xl shadow-textGreen fixed md:top-28 top-16 left-2 lgl:left-[10%] lgl:top-[15%]  bg-bodyColor z-50">
          <div className="flex justify-end  p-3 ">
            <span
              onClick={EditModal}
              className=" bg-textDark rounded-xl p-4 cursor-pointer flex flex-col justify-center items-center text-textLight hover:text-textGreen"
            >
              <IoMdCloseCircleOutline /> <h3 className="text-[8px] ">Close</h3>
            </span>
          </div>
          <PostEdit post={post} EditModal={setEditModal}></PostEdit>
        </div>
      )}
      {openmodal && (
        <ConfirmationModal
          show={openmodal}
          onConfirm={handleDelete}
          onCancel={() => setOpenmodal(false)}
        ></ConfirmationModal>
      )}
    </main>
  );
}

function PostEdit(props) {
  const { title, content, addedDate, _id, posturl } = props.post;
  const { setEditModal } = props.EditModal;
  // console.log(title);
  const [selectedFile, setSelectedFile] = useState(null);
  // const [uploadProgress, setUploadProgress] = useState(false);
  // const [downloadURL, setDownloadURL] = useState(null);

  const [task, SetTask] = useState({
    title: "",
    content: "",
    posturl: "",
  });
  // console.log(task);
  // const chachdata = Data[props.index];
  // console.log(chachdata);
  useEffect(() => {
    SetTask({
      title: title,
      content: content,
    });
  }, []);

  const handleUpdatetask = async (event) => {
    event.preventDefault();
    // console.log(task);

    try {
      const downloadURL = await uploadFile(selectedFile);
      const post = { ...task, posturl: downloadURL };
      console.log(post);
      const result = await UpdatePosts(_id, post);

      console.log(result);

      if (result.success == true) {
        toast.success("your post is Updated ");
        SetTask({
          title: "",
          content: "",
          posturl: "",
        });
        setSelectedFile(""),
          // setEditModal(false);
          window.location.reload();
      } else {
        toast.error("failed to Update the post");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="lgl:w-[80vw] lgl:h-[60vh] h-[75vh] w-[95vw] flex flex-col lgl:flex-row justify-between lgl:justify-evenly items-center ">
      <div className="p-10 md:w-96 w-72 rounded-2xl shadow-inner shadow-textGreen">
        <h1 className=" text-textGreen font-semibold text-xl">
          Update your post
        </h1>
        <form onSubmit={handleUpdatetask}>
          <div>
            <label htmlFor="task-title">title</label>
            <input
              className=" w-full py-1 rounded-lg text-black"
              placeholder="Enter your task here"
              id="task_title"
              name="task_title"
              value={task.title}
              required
              onChange={(e) =>
                SetTask({
                  ...task,
                  title: e.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <label htmlFor="task_content">content</label>
            <textarea
              className=" w-full rounded-lg text-black"
              placeholder="Enter your content here"
              id="task_content"
              rows={5}
              name="task_content"
              value={task.content}
              onChange={(e) =>
                SetTask({
                  ...task,
                  content: e.target.value,
                })
              }
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="post_photo"></label>
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              className="mb-4 w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 w-24 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300">
              Update
            </button>
            <button
              onClick={(e) => SetTask({ title: "", content: "" })}
              className="px-4 py-2 w-24 rounded-md text-textGreen text-[13px] border border-red-400  hover:bg-hoverColor "
            >
              clear
            </button>
          </div>
        </form>
        {/* {JSON.stringify(task)} */}
      </div>
    </div>
  );
}
