import React, { useEffect, useState } from 'react';
import BlogMain from './BlogMain';
import BlogSide from './BlogSide';
import QuestionV2 from '../Question/QuestionV2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const [sideblog, setSideblog] = useState([])
    const [markblog, setMarkblog] = useState([])

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    

    const handleReadTime = (blog) => {
        const newSideblog = [...sideblog, blog]
        setSideblog(newSideblog)
    }

    // react toast 
    const notify = () => toast("Data already added");

    const handleBookMarked = (blog) => {
        const exist = markblog.find(item => item.title === blog.title);

        if (!exist) {
            const newMarkblog = [...markblog, blog]
            setMarkblog(newMarkblog)
        } else {
            notify()
            const newMarkblog = [...markblog, blog]
            setMarkblog(newMarkblog)
        }
    }

    return (
        <div className="sm:grid  sm:grid-cols-4 gap-2 mt-8">
            <div className="col-span-3">
                {
                    blogs.map(blog => <BlogMain
                        key={blog.id}
                        blog={blog}
                        handleReadTime={handleReadTime}
                        handleBookMarked={handleBookMarked}
                    />)
                }
                <QuestionV2/>
            </div>
            <div>
                <BlogSide sideblog={sideblog}
                    markblog={markblog}
                />
            </div>
            <ToastContainer />
            
        </div>
    );
};

export default Blog;    
