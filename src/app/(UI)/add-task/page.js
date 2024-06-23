"use client";
import React, { useState } from "react";
import { addTask } from "../../services/taskService";
import { Result } from "postcss";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import uploadFile from "../../detabases/uploadFile";


export default function AddTask() {
 const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  // const [uploadProgress, setUploadProgress] = useState(false);
  // const [downloadURL, setDownloadURL] = useState(null);

  const [task, SetTask] = useState({
    title: "",
    content: "",
    posturl:""
  });
  // console.log(task);

  const handleAddtask = async (event) => {
    event.preventDefault();
    // console.log(task);

    try {
      const downloadURL = await uploadFile(selectedFile);
      const post = ({...task,posturl:downloadURL});
      console.log(post);
      const result = await addTask(post);

      console.log(result);

      if (result.success == true) {
        toast.success("your post is created ");
        SetTask({
          title: "",
          content: "",
          posturl:"",

        });
        setSelectedFile(''),
        router.push('/show-task');
      } else {
        toast.error("failed to create the post");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center ">
      <div className=" mt-10 p-10 md:w-96 w-72 rounded-2xl shadow-inner shadow-textGreen">
        <h1>Add your post</h1>
        <form onSubmit={handleAddtask}>
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
            >
              
            </input>
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
        onChange={(e) =>
          setSelectedFile(e.target.files[0])
              }
        className="mb-4 w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
      />
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 w-24 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300">
              Add
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


