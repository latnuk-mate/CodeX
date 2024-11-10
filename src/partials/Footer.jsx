import { EnvelopeIcon } from "@heroicons/react/24/solid";

function Footer() {
    
    function getYear(){
        const ctYear = new Date().getFullYear();
            return ctYear;
    }


  return (
    <div className="mt-24 primary-bg p-5 pb-3 footer">
        <div className="max-w-[1100px] m-auto pt-24 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-28 mb-20 p-3">
                <div className="m-auto md:m-0">
                    <div className="w-[170px] h-[60px] m-auto md:m-0">
                        <a href="/">
                        <img src="/logoCode.png" alt="logo" className='object-cover w-full'/>
                        </a>
                    </div>
                    <h5 className="text-gray-400 text-lg mt-4">The Ultimate Guide To ace your coding skills.</h5>
                </div>

                <div className="grid grid-cols-2 gap-16 m-auto">
                    <div className="item">
                        <h5 className="text-xl mb-4">Quick Links</h5>
                        <ul>
                            <li className="mb-2"><a href="/" className="text-gray-400">Home</a></li>
                            <li className="mb-2"><a href="/" className="text-gray-400">Courses</a></li>
                            <li className="mb-2"><a href="/" className="text-gray-400">Dev Challenges</a></li>
                            <li className="mb-2"><a href="/" className="text-gray-400">Articles</a></li>
                            <li className="mb-2"><a href="/" className="text-gray-400">Contact</a></li>
                        </ul>
                    </div>
                    <div className="item">
                        <h5 className="text-xl mb-4">Legal</h5>
                        <ul>
                            <li className="mb-2"><a href="/" className="text-gray-400">Privacy Policy</a></li>
                            <li className="mb-2"><a href="/" className="text-gray-400">Terms of use</a></li>
                            <li className="mb-2"><a href="/" className="text-gray-400">Refund Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="m-auto md:m-0">
                <h5 className="capitalize text-2xl mb-3 text-center md:text-start">Get in touch</h5>      
                <a href="/" 
                className="flex items-center gap-2 text-xl text-gray-400 capitalize hover:text-amber-400 ">
                    <EnvelopeIcon className="w-6" />
                    support@codex.com
                </a>
            </div>
            </div>

        {/* copyright section... */}
        <h5 className="text-center text-gray-400 font-semibold">Copyright &copy; <span>{getYear()}</span> CodeX Technologies Pvt Ltd. All Rights Reserved.</h5>
        </div>
    </div>
  )
}


export default Footer;