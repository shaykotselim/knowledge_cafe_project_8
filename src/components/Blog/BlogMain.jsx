import React from 'react';
import {FiBookmark } from 'react-icons/fi';
const BlogMain = (props) => {
    const {img_blog, title, author_title, author_img, _date, read_time} =props.blog
    // console.log(props.blog.id)   
    return (
        <div>
            <div className="">
                    <div>
                        <img className="px-4" src={img_blog} alt="" />
                    </div>
                    <div className="flex justify-between items-center px-8">
                        <div className="flex gap-2 lg:gap-4 items-center text-md mt-8">
                            <div>
                                <img className="w-16 rounded-full" src={author_img} alt="" />
                            </div>
                            <div>
                                <p>{author_title}</p>
                                <p>{_date}</p>
                            </div>
                        </div>
                        <div>
                            <p className="flex items-center gap-2">{read_time} min read <FiBookmark onClick={()=>props.handleBookMarked(props.blog)} className="text-2xl hover:cursor-pointer"/></p>
                        </div>
                    </div>
                    <div className="mt-8 mx-8">
                        <p className="text-4xl">{title}</p>
                        <p className="mt-4">#beginners #programming</p>
                        <button onClick={()=>props.handleReadTime(props.blog)} className="mt-4 mb-8 underline text-blue-700">Mark as read</button>
                    </div>
            </div>
        </div>
    );
};

export default BlogMain;