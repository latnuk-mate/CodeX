
import React, { useRef } from 'react'
import DropDown from './DropDown';

function Navbar() {

  const pointer = useRef("");

  function showAndHide(pointer){
    if(pointer){
      pointer.style.display == "flex"
      ? 
      pointer.style.display = "none"
      :
      pointer.style.display = "flex"
    }
   
  }


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
        <a href="/user/login" className='primary-btn px-5 py-2 text-lg'>Sign In</a>
        <a href="/user/register" className='secondary-btn px-5 py-2 text-lg hidden md:block'>Register</a>
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