"use client";
import React, { useState } from "react";
import { addTask } from "../../services/taskService";
import { Result } from "postcss";
import { toast } from "react-toastify";

export default function AddTask() {
  const [task, SetTask] = useState({
    title: "",
    content: "",
    userId: "66324cd7bdef0b9ac13bb190",
  });
  // console.log(task);

  const handleAddtask = async (event) => {
    event.preventDefault();
    // console.log(task);

    try {
      const result = await addTask(task);

      console.log(result);

      if (result.success == true) {
        toast.success("your post is created ");
        SetTask({
          title: "",
          content: "",
          userId: "",
        });
      } else {
        toast.error("failed to create the post");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className=" bg-blue-300 mt-10 p-10 rounded-xl w-96">
        <h1>Add your post</h1>
        <form onSubmit={handleAddtask}>
          <div>
            <label htmlFor="task-title">title</label>
            <input
              className=" w-full rounded-lg"
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
              className=" w-full rounded-lg"
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

          <div className="flex gap-3">
            <button className="bg-blue-500 px-5 rounded-xl hover:bg-blue-400">
              Add
            </button>
            <button
              onClick={(e) => SetTask({ title: "", content: "" })}
              className="bg-red-600 px-4 py-1 rounded-xl hover:bg-red-400"
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
