
function ExploreArea() {
  return (
    <div className="mt-32 explore mb-20">
        <div className="ps-8 mb-12">
        <h5 className='text-4xl uppercase highlightedText mb-2'>Explore Things</h5>
        <h5 className='text-gray-400 text-xl'>Explore Your favourite domain and Your Interests!</h5>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        <div className="item primary-bg p-3 rounded-md flex items-center justify-center hover:text-amber-400">
            <a href="/challenges?frontend" className="text-2xl">Frontend Challenges</a>
        </div>
        <div className="item primary-bg p-3 rounded-md flex items-center justify-center hover:text-amber-400">
            <a href="/challenges?frontend" className="text-2xl">Backend Challenges</a>
        </div>
        <div className="item primary-bg p-3 rounded-md flex items-center justify-center hover:text-amber-400">
            <a href="/challenges?frontend" className="text-2xl">Mock Test</a>
        </div>
        <div className="item primary-bg p-3 rounded-md flex items-center justify-center hover:text-amber-400">
            <a href="/challenges?frontend" className="text-2xl">Free Web Dev</a>
        </div>
        <div className="item primary-bg p-3 rounded-md flex items-center justify-center hover:text-amber-400">
            <a href="/challenges?frontend" className="text-2xl">React Challenges</a>
        </div>
        <div className="item primary-bg p-3 rounded-md flex items-center justify-center hover:text-amber-400">
            <a href="/challenges?frontend" className="text-2xl">DSA Practice</a>
        </div>
        <div className="item primary-bg p-3 rounded-md flex items-center justify-center hover:text-amber-400">
            <a href="/challenges?frontend" className="text-2xl">Interview Experiences</a>
        </div>
    </div>
    </div>

  )
}

export default ExploreArea;