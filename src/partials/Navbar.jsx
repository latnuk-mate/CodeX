import React, { useContext } from 'react'
import DropDown from './DropDown';
import { ContextUser } from '../UserContext';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import helper from "../helper/helper";

function Navbar({showAndHide, pointer}) {

   const {user, setUser} = useContext(ContextUser);

  return (
  <>
     {/* custom dropdownMenu */}
     <DropDown onclick={showAndHide} pointer={pointer}/>
<nav className='navbar flex justify-around py-5 z-0 lg:z-50  relative items-center'>
        {/* navbar brand */}
        <div className="w-[170px] h-[60px] mx-2 md:mx-16">
            <a href="/">
            <img src="/logoCode.png" alt="logo" className='object-cover w-full'/>
            </a>
        </div>

    {/* nav links */}
     <ul className='m-auto hidden lg:flex items-center text-xl gap-7'>
        <li><a href="#about_section" className="px-4 py-2">About</a></li>
        <li><a href="/courses" className="px-4 py-2">Courses</a></li>
        <li><a href="/articles" className="px-4 py-2">Articles</a></li>
        <li><a href="/contact" className="px-4 py-2">Contact</a></li>
     </ul>

     {/* user flow */}
     <div className="flex pr-0 lg:pr-14 gap-4 items-center">
      {
         user ?(
            <>
               <Link to={"/dashboard/profile"} className="px-4 py-1 gap-1 flex items-center justify-center  bg-zinc-50/20 w-auto rounded-[100px]">
                  <UserCircleIcon className='w-8 h-8'/>
                  <span className='text-lg'>Dashboard</span>
               </Link>
               <button onClick={() => helper.logOut(setUser)} className='primary-btn px-5 py-2 hidden lg:block'>Sign Out</button>
            
            </>
         )
         :
         (

         <>
        <Link to={"/user/login"} className='primary-btn px-5 py-2 text-lg'>Sign In</Link>
        <Link to={"/user/register" }className='secondary-btn px-5 py-2 text-lg hidden md:block'>Register</Link>
          </> 
         )}
    
    </div>

     {/* hamburger */}
     <div className="hamburger h-8 w-8 bg-amber-500 rounded-md flex lg:hidden items-center cursor-pointer" 
    onClick={() => showAndHide(pointer.current)}>
      <img src="/hamburgerIcon.jpg" alt="" className='object-contain p-1'/>
     </div>
    </nav>
</>
  )
}

export default Navbar;