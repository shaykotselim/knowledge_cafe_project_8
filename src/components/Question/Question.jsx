import React from 'react';

const Question = () => {
    return (
        <div>
            <div className='bg-gray-100 px-2 py-1 rounded'>
                    <div className="border bg-white shadow-lg rounded mt-2 px-2 py-4 ">
                        <p> 1. Difference Between props and state?</p>
                        <p className='underline'>Ans:</p>
                        <p>
                            Props:  
                            <li>Props are read-only.</li>
                            <li>Props are immutable.</li>
                            <li>Props make components reusable.</li>

                            State:
                            <li>State changes can be asynchronous.</li>
                            <li>State is mutable.</li>
                            <li>State cannot make components reusable.</li>
                        </p>
                    </div>
                    <div className="border bg-white shadow-lg rounded mt-2 px-2 py-4 ">
                        <p> 2. How does the work useState?</p>
                        <p className='underline'>Ans:</p>
                        <p>
                            useState:  
                            The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.
                        </p>
                    </div>
                    <div className="border bg-white shadow-lg rounded mt-2 px-2 py-4 ">
                        <p>3.Purpose of useEffect other than fetching data.</p>
                        <p className='underline'>Ans:</p>
                        <p>
                            The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional. 
                        </p>
                    </div>
                    <div className="border bg-white shadow-lg rounded mt-2 px-2 py-4 ">
                        <p>4.How Does React work?</p>
                        <p className='underline'>Ans:</p>
                        <p>
                            React has some core features that make it stand out from other JavaScript libraries. The following sections will introduce you to these features and explain how they contribute to mobile and web application development.
                        </p>
                        <p className="text-xl font-medium">
                            JSX ,  Virtual Dom , Components and Props, State Management
                        </p>
                    </div>
            </div>
        </div>
    );
};

export default Question;