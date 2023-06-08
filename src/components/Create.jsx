import React, { useState } from "react";
import { useGetCreateBlogMutation } from "../feature/serv/clogApi";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const nav = useNavigate();

  const [getCreateBlog] = useGetCreateBlogMutation();
  const submitHandler = (e) => {
    e.preventDefault();
    const newData = {
      id: Date.now(),
      title,
      desc,
      image,
    };
    getCreateBlog(newData);
    nav('/')
  };

  return (
    <div className=" flex justify-center items-center h-screen ">
      <form
        onSubmit={submitHandler}
        className=" flex flex-col w-96 shadow-lg rounded bg-slate-300 p-10  gap-2 m-5 md:m-0"
      >
        <h2 className=" text-xl md:text-3xl text-gray-700 text-center mb-3 font-bold">Create Card</h2>
        <input
          type="text" required
          className=" outline-none border border-gray-400 rounded px-3 py-2 "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Text..."
        />
        <input
          type="text" required
          className=" outline-none border border-gray-400 rounded px-3 py-2 "
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Desc..."
        />
        <input
          type="text" required
          className=" outline-none border border-gray-400 rounded px-3 py-2 "
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image..."
        />
        <button
          type="submit"
          className=" bg-blue-950 px-3 py-2 rounded text-white mt-4"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
