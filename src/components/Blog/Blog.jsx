import React, { useEffect, useState } from 'react';
import BlogMain from './BlogMain';
import BlogSide from './BlogSide';

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const [sideblog, setSideblog] = useState([])
    const [markblog , setMarkblog] = useState([])

    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    const handleReadTime =(blog)=>{
        const newSideblog = [...sideblog, blog]
        setSideblog(newSideblog)
    }
    
    const handleBookMarked =(blog)=>{
        const newMarkblog = [...markblog, blog]
        setMarkblog(newMarkblog)
    }

    return (
        <div className="sm:grid  sm:grid-cols-4 gap-2 mt-8">
            <div className="col-span-3">
                {
                    blogs.map(blog=><BlogMain
                        key={blog.id}
                        blog={blog}
                        handleReadTime ={handleReadTime}
                        handleBookMarked={handleBookMarked}
                    />)
                }
                
            </div>
            <div>
                <BlogSide sideblog={sideblog}
                    markblog={markblog}
                />
            </div>

        </div>
    );
};

export default Blog;    
