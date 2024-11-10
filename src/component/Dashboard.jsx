
import { useRef } from 'react';
import Sidebar from './Sidebar';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { ArrowTopRightOnSquareIcon, PlayCircleIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';

function Dashboard() {
  const element = useRef();

  function removeBg(e){
    const list = Array.from(element.current.children);
    list.forEach(item => {
        item.classList.remove('active');
    });
   e.target.classList.add('active');

   onContentChange(e);  
    
}

  function changeContent(e){
      const value = e.target.innerText;

      switch(value){
        case "Dashboard":
          return (<h1>Hello, World</h1>);
        case "Refer And Earn":
          return (<h1>Refer and earn</h1>)

        default:
          return ""
      }
  }

  const course = [
    {title: "Mern Stack", img : '/mern.png', dateEnrolled: "11/10/2024", status: "course in progess"},
    {title: "App Development", img : '/appdev.jpg', dateEnrolled: "11/10/2024", status: "course in progess"},
    {title: "UI/UX desgin", img : '/design.png', dateEnrolled: "11/10/2024", status: "course in progess"}
  ]

  const courses = [...course , ...course, ...course];

  const NewCourse = [
    {title: "Ethical Hacking", img : '/hacking.jpg', lectures: "155", duration: "32H"},
    {title: "Python", img : '/python.jpg', lectures: "120", duration: "30H"},
    {title: "Machine Learning", img : '/machineLearn.jpg', lectures: "135", duration: "29H"}
  ]


  return (
    <div className='dashboard lg:grid grid-cols-4 lg:gap-8 xl:gap-2'>
        {/* sidebar */}
        <Sidebar removeBg={removeBg} element={element}/>

      {/* main content */}
       <main className='relative col-span-3'>
        {/* topbar */}
        <div className="mb-5 primary-bg p-3 flex justify-between items-center lg:hidden">
          <div className="ps-4">
          <Bars3Icon className='w-7 h-7 cursor-pointer' />
        </div>
         <div className="flex items-center gap-4 px-2">
          <Link to={'#'} className='flex items-center gap-1 capitalize text-sm'>upgrade course
            <ArrowTopRightOnSquareIcon className='w-5 h-5' />
          </Link>
          <Link to={'#'} className='flex items-center gap-2 capitalize text-sm'>refer and earn
          <i class="fa-solid fa-hand-holding-dollar w-5 h-5"></i>
          </Link>
         </div>
        </div>
        {/* course filter  */}
        <div className="nav flex justify-center lg:justify-start lg:mt-10 items-center gap-20">
          <h5 className='hidden lg:block text-2xl highlightedText'>My Courses</h5>
          <ul className='flex items-center'>
          <li
            className="px-5 lg:px-8 py-1 cursor-pointer text-lg rounded-[100px] border border-cyan-400" 
            onClick={(e) => removeBg(e)}>
              All
          </li>
          <li
            className="px-5 lg:px-8 py-1 cursor-pointer text-lg" 
            onClick={(e) => removeBg(e)}>
              Design
          </li>
          <li
            className="px-5 lg:px-8 py-1 cursor-pointer text-lg" 
            onClick={(e) => removeBg(e)}>
              Business
          </li>
          <li
            className="px-5 lg:px-8  py-1 cursor-pointer text-lg" 
            onClick={(e) => removeBg(e)}>
              It And Software
          </li>
          </ul>
        </div>

        {/* course area */}
        <div className="course--content mt-16 overflow-x-auto flex w-full gap-5 p-6">
          {
            courses && courses.map(course => (
              <div className='flex-shrink-0 w-[20rem]'>
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
       </main>

    </div>
  )
}

export default Dashboard;