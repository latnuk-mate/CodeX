import React from 'react'

function About() {

  return (
    <div className='aboutSection mt-32 pb-10 pt-20' id='about_section'>
        <div className='max-w-[1140px] m-auto p-5'>
        <h1 className='uppercase font-normal leading-3 mb-20 lg:mb-8 text-center text-4xl tracking-widest'>What we are!</h1>
            <div className="aboutContainer flex justify-center gap-20 md:gap-10 lg:gap-20 mt-12 flex-col md:flex-row">
            <div className='secondary-bg h-full px-6 py-3  w-full lg:w-2/3 order-2 md:order-1 firstAbout rounded-md'>
                <h5 className='text-3xl text-center mb-5 capitalize'>
                    Engage With&nbsp; 
                <span className='highlightedText font-light'>code<span className='text-6xl font-medium'>x</span></span> 
                </h5>
            <p className="text-gray-500 text-lg text-center mb-10">
            At <span className='highlightedText font-light'>code<span className='text-3xl font-medium'>x</span></span>, we believe that education should be accessible, 
            engaging, and transformative. Founded in 2024, our mission is to empower 
            learners of all ages through innovative technology and personalized learning experiences.
            </p>

            <div className="flex item-center justify-center gap-16 mb-5">
                <a href="/user/register" className="element-btnSecondary px-7 py-2">Register</a>
                <a href="#exploreArea" className="element-btnPrimary px-7 py-2">Explore Us</a>
            </div>
            </div>

            {/* second block */}
            <div className="order-1 md:order-2">
                <h5 className="highlightedText text-3xl mb-3 capitalize font-normal tracking-widest">Our Mission & vision</h5>
                <h5 className="text-white tracking-wide uppercase">Empowering Minds, Transforming Futures</h5>
            <p className="text-gray-400 text-lg max-w-[700px] lg:max-w-[400px] mb-4 mt-2">
            we are committed to breaking down barriers to education.
            Whether you're a student seeking to enhance your skills, a teacher looking for engaging resources,
            or a lifelong learner exploring new interests, we have something for you.
            </p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About;
