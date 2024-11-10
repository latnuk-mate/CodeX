import { RectangleStackIcon } from "@heroicons/react/24/solid";


function HomeTuts() {
  return (
    <div className="max-w-[1200px] gap-8 -mt-20 relative flex items-center m-auto flex-col md:flex-row">
        <div className="primary-bg p-4 flex gap-10 rounded-lg flex-col md:flex-row">
                <div className="first--part overflow-hidden h-full w-full md:h-[300px] md:w-[300px] m-auto">
                    <img src="/tuto1.jpg" alt="" className="object-cover h-full w-full rounded-md"/>
                </div>
            <div className="">
                <h5 className="highlightedText text-xl mb-3 capitalize font-normal tracking-widest">tutorial</h5>
                <a href="/tutorial" className="text-white text-3xl tracking-wide uppercase hover:text-amber-500">Learn React Native</a>
            <p className="text-gray-400 text-lg max-w-[400px] mb-4 mt-2">This course is ideal for beginners who want to dive into mobile app development, 
                as well as experienced web developers looking to expand their skill set.
                A basic understanding of JavaScript and React is beneficial, but not mandatory.
            </p>
        <div className="flex items-center mb-2">
            <img src="/reactlogo.png" alt="" className="object-cover w-10" />
            <img src="jsLogo.jpg" alt="" className="object-cover w-6" />
        </div>
    <div className="flex items-center gap-3">
        <h5 className="text-gray-400">1hr 30m</h5>
        <h5 className="text-gray-400">Advanced</h5>
        <h5 className="text-gray-400">December 21, 2024</h5>
    </div>
        </div>
        </div>

        <div className="primary-bg p-4 rounded-md w-full md:w-auto">
            <div className="flex gap-3 items-center mb-7">
                <img src="/tuto2.jpg" alt="tuto" className="w-24 h-auto object-cover"/>
                <div>
                <h5 className="highlightedText text-lg capitalize font-normal tracking-widest">tutorial</h5> 
                <a href="/tutorial" className="text-lg text-white hover:text-amber-400">FullStack Web Development</a>
                </div>
            </div>
            <div className="flex gap-3 items-center mb-7">
                <img src="/tuto3.jpg" alt="tuto" className="w-24 h-auto object-cover"/>
                <div>
                <h5 className="highlightedText text-lg capitalize font-normal tracking-widest">tutorial</h5> 
                <a href="/tutorial" className="text-lg text-white hover:text-amber-400">Android Development</a>
                </div>
            </div>
            <div className="flex gap-3 items-center mb-7">
                <img src="/tuto4.jpg" alt="tuto" className="w-24 h-auto object-cover"/>
                <div>
                <h5 className="highlightedText text-lg capitalize font-normal tracking-widest">tutorial</h5> 
                <a href="/tutorial" className="text-lg text-white hover:text-amber-400">Learn Python</a>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default HomeTuts;