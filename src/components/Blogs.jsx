import React from 'react'
import { useGetClogsbyNameQuery } from '../feature/serv/clogApi'
import CardBlog from './CardBlog';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const {data:blogs} = useGetClogsbyNameQuery();
  return (
    <>
    <Link to={"/create"}>
    <button className=' bg-blue-950 px-3 py-2 rounded text-white mt-4'>Create</button>
    
    </Link>
    <div className=' flex flex-wrap justify-between items-center gap-4 mt-10 '>
        {
            blogs?.map(blog => {
                return(
                    <CardBlog key={blog.id} blog={blog} />
                )
            })
        }
    </div>
    </>
  )
}

export default Blogs