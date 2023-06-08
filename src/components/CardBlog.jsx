import React from 'react'
import { Link } from 'react-router-dom'

const CardBlog = ({blog}) => {
  return (
    <div className=' border rounded space-y-3 p-2'>
        <img src={blog?.image} className=' w-48 h-48 object-cover ' alt="" />
        <h2>{blog?.title}</h2>
        <p>{blog?.desc}</p>
        <div className="flex gap-3">
        <Link to={`/detail/${blog?.id}`}>
        <button  className=' bg-blue-500 text-white px-3 py-1 rounded'>Detail</button>
        </Link>
        <Link to={`/edit/${blog?.id}`}>
        <button  className=' bg-green-500 text-white px-3 py-1 rounded'>Edit</button>
        </Link>
        </div>
    </div>
  )
}

export default CardBlog