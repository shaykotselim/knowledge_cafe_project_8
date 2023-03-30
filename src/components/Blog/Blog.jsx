import React, { useEffect, useState } from 'react';
import BlogMain from './BlogMain';
import BlogSide from './BlogSide';

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="grid  grid-cols-4 gap-2 mt-8">
            <div className="col-span-3">
                {
                    blogs.map(blog=><BlogMain
                        key={blog.id}
                        blog={blog}
                    />)
                }
            </div>
            <div>
                <BlogSide/>
            </div>

        </div>
    );
};

export default Blog;    
