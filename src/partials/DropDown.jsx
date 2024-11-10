import { XMarkIcon } from "@heroicons/react/24/solid";


function DropDown({onclick, pointer}) {
  return (
    <div className="dropdown absolute w-[300px] h-full rounded-sm p-3 right-0 flex-col items-center justify-center"
      ref={pointer} style={{display : "none"}}>
        <ul className='flex flex-col gap-10 items-center text-2xl'>
        <li><a href="#about_section" className="px-4 py-2">About</a></li>
        <li><a href="/courses" className="px-4 py-2">Courses</a></li>
        <li><a href="/articles" className="px-4 py-2">Articles</a></li>
        <li><a href="/contact" className="px-4 py-2">Contact</a></li>
     </ul>

     {/* icon */}
     <XMarkIcon className='w-8 h-8 text-white absolute top-2 right-3 cursor-pointer' onClick={() => onclick(pointer.current)}/>
    </div>
  )
}

export default DropDown;