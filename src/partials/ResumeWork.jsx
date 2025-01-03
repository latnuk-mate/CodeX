export default function ResumeWork(
    {
        works,
        company,
        setCompany,
        summary,
        setSummary,
        experience,
        setExperience,
        joinDate,
        setJoinDate,
        leaveDate,
        setLeaveDate,
        role,
        setRole,
        handleWork

    }
){
    return(
        <div className="mt-5">
            <h5 className="text-lg mb-2">Work Experience</h5>
            {
                works && works.map((work, index) => (
                    <div key={index}>           
                    <div key={index} className="working--item mb-3">
                            <input 
                            type="text" 
                            className="mb-3 w-full px-3 border border-cyan-300 focus:outline-none"
                            placeholder={work.company}
                            value={company[index]}
                            onChange={(e) => handleWork(company, setCompany, index, e.target.value)}
                            />
                         <input 
                            type="text" 
                            className="w-full px-3 border border-cyan-300 focus:outline-none"
                            placeholder={work.role}
                            value={role[index]}
                            onChange={(e) => handleWork(role, setRole, index, e.target.value)}
                         />
                    </div>
                    <div className="mb-2">
                        <textarea
                        rows={5}
                        className="mb-1 w-full px-3 border border-cyan-300 focus:outline-none"
                        placeholder={work.cpDetails}
                        value={summary[index]}
                        onChange={(e) => handleWork(summary, setSummary, index, e.target.value)}
                        >
                        </textarea>
                        <textarea
                        rows={5}
                        className="w-full px-3 border border-cyan-300 focus:outline-none"
                        placeholder={work.experience}
                        value={experience[index]}
                        onChange={(e) => handleWork(experience, setExperience, index, e.target.value)}
                        >
                        </textarea>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <input type="date"
                        defaultValue={joinDate[index] ? new Date(joinDate[index]).toISOString().substr(0, 10) : ""}
                        onChange={(e) => handleWork(joinDate, setJoinDate , index , e.target.value)}
                        className="w-full p-1 border border-cyan-300 focus:outline-none"/>
                        <input type="date"
                                defaultValue={leaveDate[index] ? new Date(leaveDate[index]).toISOString().substr(0, 10) : ""}
                                onChange={(e) => handleWork(leaveDate, setLeaveDate , index, e.target.value)}
                            className="w-full p-1 border border-cyan-300 focus:outline-none"
                        />
                    </div>
                    </div>
         
                ))
            }
        </div>
    )
}