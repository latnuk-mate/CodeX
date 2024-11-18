import {ArrowUpTrayIcon } from "@heroicons/react/16/solid";

export default function Hackathon(){

    function showHackathon(){
        alert('Hacakthon has ended!');
    }

    return(
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            <div className="rounded-lg">
                <div className="bg-amber-500 p-3 flex items-center gap-2 rounded-t-xl">
                    <div className="w-10 h-10 overflow-hidden">
                        <img src="/hackathonArc.png" alt="" className="object-cover"/>
                    </div>
                    <h5 className="text-xl font-semibold text-gray-900">Hackathon<span className="text-blue-950 ml-3">Problem Statement</span></h5>
                </div>
                <div className="p-5 text-lg primary-bg rounded-b-xl">
                <p className="mb-8">
                    Create a mobile app for upskill mafia which containw a community 
                    forum and a social media platform for beginner ui ux designers
                </p>
                <button className="primary-btn w-full p-3" onClick={showHackathon}>View Problem statement</button>
                <h5 className="text-gray-100 mt-5 mb-2 text-xl">Task Submission Details</h5>
                <h5 className="text-gray-300">Submission Deadline: <span className="highlightedText font-bold">TBD</span></h5>
             
                <button onClick={showHackathon} className="rounded-xl text-xl p-2 secondary-bg w-full mt-5 mb-2 capitalize flex items-center gap-1 justify-center">
                        <ArrowUpTrayIcon className="w-5 h-5"/>
                    submit text
                </button>
             </div>
            </div>

            <div className="rounded-xl primary-bg p-3">
                <div className="flex items-center justify-between mt-3">
                    <h5 className="text-2xl flex items-center gap-2">
                        <img src="/hackathonLeader.png" alt="" className="object-cover"/>
                        Hackathon <span className="highlightedText">Leaderboard</span>
                    </h5>
                    <h5 className="font-semibold">Nov2024</h5>
                </div>
                <div>
                <div className="rounded-xl text-xl p-3 px-5 secondary-bg w-full mt-12 mb-2 capitalize flex items-center gap-1 justify-between">
                 <h5 className="capitalize text-lg"># team Name</h5>
                 <h5 className="text-xl font-bold">Action</h5>
            </div>

            <div className="mt-20 flex justify-center items-center gap-2">
            <img src="/hackathonLeader.png" alt="" className="object-cover"/>
                    <h5 className="text-3xl font-semibold">
                        To be <span className="highlightedText">Declared</span>
                    </h5>
            </div>
             </div>
            </div>

            <div className="rounded-lg">
                <div className="bg-amber-500 p-3 flex items-center gap-2 rounded-t-xl">
                    <div className="w-10 h-10 overflow-hidden">
                        <img src="/hackathonTips.png" alt="" className="object-cover"/>
                    </div>
                    <h5 className="text-xl font-semibold text-gray-900">Tips and Tricks for the<span className="text-blue-950 ml-2">Hackathon</span></h5>
                </div>
                <div className="p-8 primary-bg rounded-b-xl">
                        <ol className="list-decimal">
                            <li className="mb-1">User Focus: Prioritize user needs with thorough research.</li>
                            <li className="mb-1">Simple Navigation: Create an intuitive, clear path for users.</li>
                            <li className="mb-1">Visual Hierarchy: Highlight key elements for easy understanding.</li>
                            <li className="mb-1">Mobile-First: Design with mobile devices in mind for broader reach.</li>
                            <li className="mb-1">Feedback: Implement real-time feedback for user guidance.</li>
                            <li className="mb-1">Consistent Design: Ensure a uniform look for user familiarity.</li>
                            <li className="mb-1">Accessibility: Ensure inclusivity with accessible design features.</li>
                        </ol>
                </div>
            </div>


            <div className="rounded-xl primary-bg p-3">
                    <h5 className="text-2xl flex items-center gap-2 justify-center mt-3">
                        <img src="/hackathonLeader.png" alt="" className="object-cover"/>
                        Last <span className="highlightedText">Hackathon Winner</span>
                    </h5>
                <div>
             <div className="mt-32 flex justify-center items-center gap-2">
            <img src="/hackathonLeader.png" alt="" className="object-cover"/>
                    <h5 className="text-2xl font-semibold">
                        To be <span className="highlightedText">Declared</span>
                    </h5>
            </div>
             </div>
            </div>

        </div>
    )
}