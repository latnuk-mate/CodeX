import React from 'react';
import Navbar from '../partials/Navbar';
import HomeTuts from '../partials/HomeTuts';
import About from '../partials/About';
import Instructor from '../partials/Instructor';
import Testimony from '../partials/Testimony';
import Contact from '../partials/Contact';
import Footer from '../partials/Footer';

function LandingPage({showAndHide, pointer}) {

  return (
    <>
    <div className='h-screen relative'>
        <div className="img--box opacity-10 absolute h-full w-full">
            <img src="/heroimg.jpg" alt="" className='object-cover h-full w-full'/>
        </div>
        <Navbar showAndHide={showAndHide} pointer={pointer}/>
        <div className="z-0 lg:z-50 relative mt-32 flex justify-center flex-col items-center ps-5 md:ps-0">
        <h1
            className='text-4xl md:text-5xl lg:text-6xl font-semibold uppercase leading-3 lg:leading-6 mb-5'>
            Escape the boundary
            with &nbsp;
            <span className='highlightedText font-light'>code<span className='text-6xl font-medium'>x</span></span>
        </h1>
        <h5 className='text-gray-400 text-xl capitalize'>Ace Your Coding skills To Build Your carreer in Software Industry.</h5>
        <div className="flex items-center gap-8 mt-8">
            <a href="/courses" className='px-5 md:px-7 py-2 md:py-3 primary-btn'>View Courses</a>
            <a href="/tutorials" className='px-5 md:px-7 py-2 md:py-3 element-btnPrimary'>Watch Tutorials</a>
        </div>
        </div>
    </div>

    <HomeTuts />

    {/* about section... */}

    <About />

    {/* instructor section */}
    <Instructor />


    {/* testimonial section */}
    <Testimony />

{/* contact section... */}
    <Contact />

    {/* footer section... */}
    <Footer />  

    </>
  )
}

export default LandingPage;