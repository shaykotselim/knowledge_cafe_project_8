import React from 'react';
import BlogMain from './BlogMain';
import BlogSide from './BlogSide';

const Blog = () => {
    return (
        <div className="grid  grid-cols-4 gap-2 mt-8">
            <div className="col-span-3">
                <BlogMain/>
            </div>
            <div>
                <BlogSide/>
            </div>

        </div>
    );
};

export default Blog;    
