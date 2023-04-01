import React from 'react';
import logo from "../../../public/images/selim.png"
const Header = () => {
    return (
        <nav className=" container ">
            <div className="flex justify-between items-center  py-8 border-b-2  ">
                    <div>
                        <p className="text-3xl font-medium bg-gradient-to-r from-pink-500 via-fuchsia-700 to-pink-500 inline-block text-transparent bg-clip-text ">KNOWLEDGE_CAFE</p>
                    </div>
                    <div>
                        <img width={60} src={logo} alt="" />
                    </div>
            </div>     
        </nav>
    );
};

export default Header;