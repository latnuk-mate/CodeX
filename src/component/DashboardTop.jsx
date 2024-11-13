import { useContext } from 'react';
import { ContextUser } from '../UserContext';
import { ArrowTopRightOnSquareIcon, Bars3Icon, ChevronDownIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';


export default function Topbar({showAndHide, pointer, logOut, element, clickToSee}){

    const {user} = useContext(ContextUser);

    return(
        <div className="lg:-ml-12">
        {/* topbar */}
     <div className="mb-5 primary-bg p-3 flex justify-between items-center">
          <div className="ps-4 lg:ps-12">
          <Bars3Icon className='w-7 h-7 cursor-pointer lg:hidden' onClick={() => clickToSee(element)} />
          <div className="items-center gap-4 px-2 hidden lg:flex">
          <Link to={'#'} className='flex items-center gap-1 capitalize text-sm pe-3 border-r border-r-gray-300'>upgrade course
            <ArrowTopRightOnSquareIcon className='w-5 h-5' />
          </Link>
          <Link to={'#'} className='flex items-center gap-2 capitalize text-sm'>combo pack bundle
          <ArrowTopRightOnSquareIcon className='w-5 h-5' />
          </Link>
         </div>
        </div>
         <div className="flex items-center gap-4 px-2 lg:hidden">
          <Link to={'#'} className='flex items-center gap-1 capitalize text-sm'>upgrade course
            <ArrowTopRightOnSquareIcon className='w-5 h-5' />
          </Link>
          <Link to={'#'} className='flex items-center gap-2 capitalize text-sm'>refer and earn
          <i class="fa-solid fa-hand-holding-dollar w-5 h-5"></i>
          </Link>
         </div>
         
         {/* user area */}

          <div
          onClick={() => showAndHide(pointer.current)}
          className="relative cursor-pointer p-2 rounded-md hidden lg:flex items-center gap-2 border border-gray-200">
              <div className="flex items-center justify-center w-8 h-8 rounded-full secondary-bg">
                {user ? user.name[0] : ""}
              </div>
            <h5 className='capitalize'>{user ? user.name : ""}</h5>
            <ChevronDownIcon className='w-5 h-5' />

            <div
            style={{display: 'none'}}
            className="absolute p-2 rounded-sm -bottom-14 primary-bg w-full left-0 flex justify-center" ref={pointer}>
              <h5 onClick={logOut} className='capitalize text-lg mb-2'>Sign out</h5>
            </div>

          </div>

        </div>
        
        
        </div>
    )
}