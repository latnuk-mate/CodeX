import { CheckCircleIcon, UserCircleIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';
import { AcademicCapIcon, BookOpenIcon, PencilSquareIcon, TrophyIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useContext} from 'react';
import { ContextUser } from '../UserContext';


function Sidebar({removeBg, element}) {

    const {user} = useContext(ContextUser);

  return (
    <div>
      {/* sidebar */}
      <div className='h-full max-w-[300px] primary-bg p-5 absolute lg:relative hidden lg:block'
      >
        {/* hide btn */}
        <XMarkIcon className='lg:hidden w-8 h-8 text-white absolute top-2 right-3 cursor-pointer'/>
        {/* profile section */}
        <div className="profile p-4 mt-3 text-center border-b border-b-cyan-600">
          <div className="mb-2 m-auto flex items-center justify-center w-12 h-12 overflow-hidden rounded-full">
              <UserCircleIcon className='w-12 h-12'/>
          </div>
          <h5 className='capitalize text-lg mb-5 highlightedText'>{user.name}</h5>
          <Link to={'/user/logout'} className='px-5 py-2 element-btnPrimary'>Sign Out</Link>
        </div>

        {/* navigation area */}
        <div className="mt-10 nav">
          <ul ref={element}>
            <li
            className="active mb-5 px-5 py-2 cursor-pointer text-lg flex items-center gap-2 justify-center" 
            onClick={(e) => removeBg(e)}>
              <BookOpenIcon className='w-6 h-6' />
              Dashboard
            </li>
            <li
              onClick={(e) => removeBg(e)}
            className=" mb-5 px-5 py-2 cursor-pointer text-lg flex items-center gap-2 justify-center">
            <i class="fa-solid fa-hand-holding-dollar w-6 h-6"></i>
              Refer And Earn
            </li>
            <li
            onClick={(e) => removeBg(e)}
            className=" mb-5 px-5 py-2 cursor-pointer text-lg flex items-center gap-2 justify-center">
            <AcademicCapIcon className='w-6 h-6' />
              Certificate
            </li>
            <li
            onClick={(e) => removeBg(e)}
            className="mb-5 px-5 py-2 cursor-pointer text-lg flex items-center gap-2 justify-center">
              <TrophyIcon className='w-6 h-6' />
              Hackathon
            </li>
            <li 
            onClick={(e) => removeBg(e)}
            className="px-5 py-2 cursor-pointer text-lg flex items-center gap-2 justify-center">
              <PencilSquareIcon className='w-6 h-6' />
              Build Resume
            </li>
          </ul>
        </div>

        {/* offer area */}

        <div className="mt-8">
            <div className="bg-gray-100 text-gray-900 p-4 rounded-2xl">
              <h5 className='text-center mb-3 capitalize font-bold'>Get all 20 courses for Just ₹3,499</h5>
              <h5 className='bg-amber-400 p-1 text-center rounded-md mb-3'>Minimum 45% OFF</h5>
              <ul className='p-2 '>
                <li className="flex items-center justify-center gap-3 mb-3">
                  <CheckCircleIcon className='w-5 h-5'/>
                  Lifetime Course Access
                </li>
                <li className="flex items-center justify-center gap-3">
                  <CheckCircleIcon className='w-5 h-5'/>
                  Avail 100% REFUND in Lifetime
                </li>
              </ul>
              <Link to={'/course/details'} className='px-5 py-2 primary-btn flex justify-center mt-4'>Know More</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;