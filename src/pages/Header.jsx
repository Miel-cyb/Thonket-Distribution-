import React, { useState } from "react";
import { Link } from "react-router-dom";


function Header(){
    const [menu, setMenu] = useState(false);
    console.log(menu);
    

    return(
        <>
            <header className=" relative">
                <div className="header-content md:flex justify-between md:bg-lime-700  px-5">
                <nav className="navbar  px-4 bg-lime-700">
                    <div className="navbar-content flex px-5 justify-between">
                    <div className="logo-container"><Link to="/"><img src="/logo.png" alt="logo" className=" h-14 md:h-20 md:w-24"/></Link></div>
                    <button className="text-2xl md:hidden hover:text-white" onClick={() => setMenu(!menu)}><i className="fa-solid fa-bars-staggered"></i></button>
                    </div>
                </nav>
               
                <div className={`navlinks z-20 fixed inset-0 text-center flex flex-col justify-center items-center bg-black bg-opacity-90  transition-all ease-in-out duration-500 ${menu ? "translate-x-0" : "translate-x-full"}  md:relative md:text-black md:flex-row md:bg-transparent md:translate-x-0 md:opacity-100 md:transition-none `}>
                  <button className="text-3xl text-white hover:text-red-800 md:hidden" onClick={() => setMenu(!menu)}><i className="fa-solid fa-circle-xmark"></i></button>
                  <ul className="leading-[30px] text-white md:flex md:text-[14px] 2xl:text-[17px] ">
                    <li><a href="#">About Us </a></li>
                    <li><a href="#">Products & Services</a></li>
                    <li><a href="#">Industries We Serve</a></li>
                    <li><a href="#">Logistics and Delivery</a></li>
                    <li><a href="#">Our Network</a></li>
                    <li><a href="#">Contact Us </a></li>
                </ul>
                </div>
                </div>
            </header>
        </>
    )

}
export default Header;