import React, { useRef } from 'react'
import {PlayCircleIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';
import Topbar from './DashboardTop';

function DashboardProfile({changeBg, clickToSee, element}) {

    const ul = useRef();

    const course = [
        {id: "It And Software" , title: "Mern Stack", img : '/mern.png', dateEnrolled: "11/10/2024", status: "course in progess"},
        {id: "It And Software" , title: "App Development", img : '/appdev.jpg', dateEnrolled: "11/10/2024", status: "course in progess"},
        { id: "Design" , title: "UI/UX desgin", img : '/design.png', dateEnrolled: "11/10/2024", status: "course in progess"}
      ]
    
      const courses = [...course , ...course, ...course];
    
      const NewCourse = [
        {title: "Ethical Hacking", img : '/hacking.jpg', lectures: "155", duration: "32H"},
        {title: "Python", img : '/python.jpg', lectures: "120", duration: "30H"},
        {title: "Machine Learning", img : '/machineLearn.jpg', lectures: "135", duration: "29H"}
      ]

  return (
    <div>
        {/* topbar */}
          <div className="block lg:hidden">
          <Topbar clickToSee={clickToSee} element={element}/>
          </div>
        {/* course filter  */}
        <div className="nav-filter flex justify-center xl:justify-start lg:mt-10 items-center gap-20">
          <h5 className='hidden lg:block text-2xl highlightedText'>My Courses</h5>
          <ul className='flex items-center navigation' ref={ul}>
          <li
            data-filter="All"
            className="px-5 lg:px-8 py-1 cursor-pointer text-lg active filter" 
            onClick={(e) => changeBg(e, ul)}>
              All
          </li>
          <li
            data-filter="Design"
            className="px-5 lg:px-8 py-1 cursor-pointer text-lg filter" 
            onClick={(e) => changeBg(e, ul)}>
              Design
          </li>
          <li
           data-filter="Business"
            className="px-5 lg:px-8 py-1 cursor-pointer text-lg" 
            onClick={(e) => changeBg(e, ul)}>
              Business
          </li>
          <li
            data-filter="It And Software"
            className="px-5 lg:px-8  py-1 cursor-pointer text-lg" 
            onClick={(e) => changeBg(e, ul)}>
              It And Software
          </li>
          </ul>
        </div>

        {/* course area */}
        <div className="course--content mt-16 overflow-x-auto flex w-full gap-5 p-6">
          {
            courses && courses.map(course => (
              <div className='flex-shrink-0 w-[20rem] course--item' id={course.id}>
                    <div className="overflow-hidden rounded-t-xl">
                      <img src={course.img} alt="" className='h-[130px] w-full object-cover'/>
                    </div>
                  <div className="content primary-bg p-3 pt-5 rounded-b-xl">
                      <h5 className='text-xl font-bold mb-3'>{course.title}</h5>
                      <h5 className='text-sm mb-3'>{course.status}</h5>
                      <h5 className='capitalize mb-4'>Enrolled on {course.dateEnrolled}</h5>
                      <button className='flex items-center gap-2 w-full justify-center element-btnPrimary px-5 py-2 mb-2'>Resume
                        <PlayCircleIcon className='w-5 h-5' />
                      </button>
                  </div>
              </div>
            ))
          }
        </div>

        <div className="mt-20">
            <h5 className='capitalize text-4xl text-center highlightedText'>Browse new courses</h5>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-5">
                {
                  NewCourse.map(course => (
                    <div className="bg-gray-200 p-3 rounded-md text-gray-900">
                      <div className="flex items-center gap-3 mb-5 pt-2">
                        <img src={course.img} alt="image" className='object-cover h-[50px] w-[100px] rounded-lg'/>
                        <h5 className='text-xl font-bold'>{course.title}</h5>
                      </div>
                    <hr />
                    <div className="mt-2 flex items-center gap-3 mb-6">
                      <div className="item1 text-sm">
                        <h5 className='flex items-center gap-1'>
                          <PlayCircleIcon className='w-4 h-4' />
                          {course.lectures} Lectures
                        </h5>
                        <h5 className='flex items-center gap-1'>
                          <i className='fa fa-infinity'></i>
                          Lifetime Access
                        </h5>
                      </div>
                      <div className="item2 text-sm">
                        <h5 className='flex items-center gap-1'>
                          <PlayCircleIcon className='w-4 h-4' />
                          {course.duration} Duration
                        </h5>
                        <h5 className='flex items-center gap-1'>
                          <i className='fa fa-heart'></i>
                          Instant Mentorship
                        </h5>
                      </div>
                    </div>

                    <Link to={'/course/details'} className='capitalize text-lg px-5 py-2 flex justify-center primary-btn'>Know more</Link>
                    </div>
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default DashboardProfile;