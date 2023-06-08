import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetEditBlogSingleMutation,
  useGetSingleBlogQuery,
} from "../feature/serv/clogApi";

const Edit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const nav = useNavigate();
  const [getEditBlogSingle] = useGetEditBlogSingleMutation();
  const { data: blogs } = useGetSingleBlogQuery(id);

  useEffect(() => {
    setTitle(blogs?.title);
    setDesc(blogs?.desc);
    setImage(blogs?.image);
  }, [blogs]);

  const editHandler = (e) => {
    e.preventDefault();
    const newData = { id, title, desc, image };
    getEditBlogSingle(newData);
    nav("/");
  };

  return (
    <div className=" flex justify-center items-center h-screen ">
      <form
        onSubmit={editHandler}
        className=" flex flex-col w-96 shadow-lg rounded bg-slate-300 p-10  gap-2 m-5 md:m-0"
      >
        <h2 className=" text-xl md:text-3xl text-gray-700 text-center mb-3 font-bold">
          Update Card
        </h2>
        <input
          type="text"
          required
          className=" outline-none border border-gray-400 rounded px-3 py-2 "
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Text..."
        />
        <input
          type="text"
          required
          className=" outline-none border border-gray-400 rounded px-3 py-2 "
          defaultValue={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Desc..."
        />
        <input
          type="text"
          required
          className=" outline-none border border-gray-400 rounded px-3 py-2 "
          defaultValue={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image..."
        />
        <button
          type="submit"
          className=" bg-blue-950 px-3 py-2 rounded text-white mt-4"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
