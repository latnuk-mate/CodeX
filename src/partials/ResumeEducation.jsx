
export default function(
        {
        education, 
        newdegree,
        newSchool,
        NewadmitDate,
        NewcloseDate,
        handleEdu,
        setNewDegree,
        setNewAdmitDate,
        setNewSchool,
        setNewCloseDate
    }
    ){
        
    return (

        <>
        <h5 className="text-lg mb-2">Education</h5>
    {/* dynamic content */}
            {
            education && education.map((el, index) => (
                <div className="mb-3" key={index}>
                    <div className="mb-3">
                        <input 
                            type="text"
                            placeholder={el.role} 
                            value={newdegree[index]} 
                            onChange={(e) => handleEdu(newdegree, setNewDegree , index , e.target.value)} 
                            className="mb-3 w-full p-1 block border border-cyan-300 focus:outline-none"
                        />
                        <input   
                            type="text"
                            placeholder={el.school} 
                            value={newSchool[index]} 
                            onChange={(e) => handleEdu(newSchool, setNewSchool , index, e.target.value)} 
                            className="w-full p-1 block border border-cyan-300 focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <input type="date"
                        defaultValue={NewadmitDate[index] ? new Date(NewadmitDate[index]).toISOString().substr(0, 10) : ""}
                        onChange={(e) => handleEdu(NewadmitDate, setNewAdmitDate , index , e.target.value)}
                        className="w-full p-1 border border-cyan-300 focus:outline-none"/>
                        <input type="date"
                                defaultValue={NewcloseDate[index] ? new Date(NewcloseDate[index]).toISOString().substr(0, 10) : ""}
                                onChange={(e) => handleEdu(NewcloseDate, setNewCloseDate , index, e.target.value)}
                            className="w-full p-1 border border-cyan-300 focus:outline-none"
                        />
                    </div>
                </div>
                ))  
                
         }


    </>
   
    )
}