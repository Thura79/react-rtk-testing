import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetDeleteBlogMutation,
  useGetSingleBlogQuery,
} from "../feature/serv/clogApi";

const Detail = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  const [getDeleteBlog] = useGetDeleteBlogMutation();
  const navigate = useNavigate();
  const deleteHandler = () => {
    getDeleteBlog(blog.id);
    navigate("/");
  };
  return (
    <div className=" flex justify-center items-center mt-10">
      <div className=" border rounded space-y-3 p-2">
        <img src={blog?.image} className=" w-48 h-48 object-cover " alt="" />
        <h2>{blog?.title}</h2>
        <p>{blog?.desc}</p>
        <div className="flex gap-3">
          <Link to={`/`}>
            <button className=" bg-blue-500 text-white px-3 py-1 rounded">
              Back
            </button>
          </Link>
          <button
            onClick={deleteHandler}
            className=" bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
