export default function Personal({
    personal,
    setPersonal,
    handlePersonal,
    PersonalDetails
}){
    return(
        <div className="mb-3">
        <h5 className="text-lg mb-2">Personal Information</h5>

        <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                {
                PersonalDetails && PersonalDetails.map((item, index) => (
                        <input
                            key={index}
                            type="text" 
                            value={personal[index]} 
                            onChange={(e) => handlePersonal(personal, setPersonal , index , e.target.value)} 
                            className="w-full p-1 block border border-cyan-300 focus:outline-none"
                        />
                ))
            }
    </div>
    </div>
    )
}