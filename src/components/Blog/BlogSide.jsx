import React from 'react';
// import Question from '../Question/Question';
import QuestionV2 from "../Question/QuestionV2"
const BlogSide = ({ sideblog, markblog }) => {
    let total = 0;
    let blogtotal = 0;

    for (const blogs of sideblog) {
        const readtime = parseInt(blogs.read_time)
        total = total + readtime

    }
    for (const blog of markblog) {
        blogtotal = blogtotal + 1;
    }

    return (
        <div >
            <div className="bg-gray-100 rounded text-center h-10 py-1 mb-4">
                <h1 className="text-blue-700 text-lg font-medium">Spent Time On Read : {total} min </h1>
            </div>

            <div className="bg-gray-100 px-2 py-1 rounded mb-4">
                <p className="text-lg font-medium px-2">Bookmark Blogs : {blogtotal}</p>
                {markblog.map((title, id) => (
                    <div className="border bg-white shadow-lg rounded mt-2 ">
                        <div className=" text-lg font-medium px-2 py-4  ">
                            <p>{title.title}</p>
                        </div>
                    </div>
                )

                )

                }
            </div>

             {/* <Question/> */}
            <QuestionV2/>
        </div>
    );
};

export default BlogSide;