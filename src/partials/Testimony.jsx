function Testimony() {
  return (
    <div className="mt-24 p-3 max-w-[1200px] m-auto">
        <div className="ps-5 mb-4">
        <h5 className="capitalize highlightedText text-4xl tracking-wider mb-2">What Our Learners Say!</h5>
        <h5 className="text-gray-300 text-xl">
            Hear from students and educators who’ve transformed their learning journeys with our platform!
        </h5>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 p-3">
        <div className="testimony p-4 secondary-bg  rounded-md">
            <p className="text-gray-300 text-lg mb-2 text-center">
            "This platform has completely transformed the way I approach learning. 
            The interactive lessons and real-time feedback have made complex topics so much easier to understand!"
            </p>
            <div className="flex items-center gap-4 mt-5">
                <div className="w-[50px] h-[50px] overflow-hidden">
                    <img src="/student1.jpg" alt="" className="object-cover h-full w-full rounded-full" />
                </div>
            <h5 className="text-gray-400 text-lg">Alex G., Adult Learner</h5>
            </div>
        </div>

        <div className="testimony p-4 secondary-bg rounded-md">
            <p className="text-gray-300 text-lg mb-2 text-center">
            "I was skeptical at first, but this platform has been the best investment 
            I’ve made in my education.
            The interactive quizzes and gamified elements make learning fun and engaging.
            </p>
            <div className="flex items-center gap-4 mt-5">
                <div className="w-[50px] h-[50px] overflow-hidden">
                    <img src="/student2.jpg" alt="" className="object-cover h-full w-full rounded-full" />
                </div>
            <h5 className="text-gray-400 text-lg">Priya M., University Student</h5>
            </div>
        </div>

        <div className="testimony p-4 secondary-bg rounded-md"> 
            <p className="text-gray-300 text-lg mb-2 text-center">
            "
            The gamified features and interactive content keep me engaged every step of the way
            I’ve been able to study more efficiently and actually enjoy the process."
            </p>
            <div className="flex items-center gap-4 mt-5">
                <div className="w-[50px] h-[50px] overflow-hidden">
                    <img src="/student3.jpg" alt="" className="object-cover h-full w-full rounded-full" />
                </div>
            <h5 className="text-gray-400 text-lg">Sarah K., High School Junior</h5>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Testimony;