import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import './Navbar.css'
const Navbar = () => {

    const nav =
        <div className=' flex  text-base-content font-semibold text-lg'>
            <li><NavLink to='/'
                className='text-orange-300 font-normal md:text-white text-base  bg-transparent'

            >Home</NavLink></li>

            <li><NavLink to='/about' className=' font-normal  md:text-white text-base bg-transparent'

            >About Us</NavLink></li>


            <li><NavLink to='/contact' className='text-orange-300 font-normal md:text-white text-base bg-transparent'

            >Contact Us</NavLink></li>
        </div>
    return (
        <div className=''>
            <div className="navbar md:bg-black lg:bg-black ">
                <div className="navbar-start">
                    <div className="dropdown text-white bg-transparent">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content bg-transparent mt-3 p-2 shadow rounded-box w-24">
                            {nav}

                        </ul>
                    </div>
                    <img className='w-10 h-10  m-6 rounded-2xl' src={logo} alt="" />
                    <div className="navbar-start hidden lg:flex">
                        <ul className="menu menu-horizontal px-5">
                            {nav}
                        </ul>
                    </div>
                </div>

                <div className="navbar-end">
                    <a
                        href="#"
                        className="  border-gradient inline-block lg:text-md lg:mt-8   font-bold text-black pt-4 lg:px-10  btn border rounded-full transition duration-300 "
                    >
                        Log in
                    </a>
                    <a
                        href="#"
                        className=" bg-black p-2 inline-block text-sm  lg:text-md lg:px-6 text-md lg:mt-8  lg:pt-3 lg:py-3 font-thin text-blue-600 ml-4 border-2 rounded-full border-blue-600  transition duration-300 hover:border-gradient"
                    >
                        Sign Up
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;