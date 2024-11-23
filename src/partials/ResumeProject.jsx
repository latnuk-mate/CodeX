export default function ResumeProject(
    {
        projects,
        title,
        setTitle,
        link,
        setLink,
        summary,
        setSummary,
        experience,
        setExperience,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        handleProject
    }
){
    return(
        <div className="mt-4">
            <h5 className="text-lg mb-2">Projects</h5>
            {
            projects && projects.map((project, index) => (
                    <div key={index}>           
                    <div key={index} className="working--item mb-3">
                            <input 
                            type="text" 
                            className="mb-3 w-full px-3 border border-cyan-300 focus:outline-none"
                            placeholder={project.title}
                            value={title[index]}
                            onChange={(e) => handleWork(title, setTitle, index, e.target.value)}
                            />
                         <input 
                            type="text" 
                            className="w-full px-3 border border-cyan-300 focus:outline-none"
                            placeholder={project.link}
                            value={link[index]}
                            onChange={(e) => handleWork(link, setLink, index, e.target.value)}
                         />
                    </div>
                    <div className="mb-2">
                        <textarea
                        rows={5}
                        className="mb-1 w-full px-3 border border-cyan-300 focus:outline-none"
                        placeholder={project.summary}
                        value={summary[index]}
                        onChange={(e) => handleWork(summary, setSummary, index, e.target.value)}
                        >
                        </textarea>
                        <textarea
                        rows={5}
                        className="w-full px-3 border border-cyan-300 focus:outline-none"
                        placeholder={project.experience}
                        value={experience[index]}
                        onChange={(e) => handleWork(experience, setExperience, index, e.target.value)}
                        >
                        </textarea>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <input type="date"
                        defaultValue={startDate[index] ? new Date(startDate[index]).toISOString().substr(0, 10) : ""}
                        onChange={(e) => handleProject(startDate, setStartDate , index , e.target.value)}
                        className="w-full p-1 border border-cyan-300 focus:outline-none"/>
                        <input type="date"
                                defaultValue={endDate[index] ? new Date(endDate[index]).toISOString().substr(0, 10) : ""}
                                onChange={(e) => handleProject(endDate, setEndDate , index, e.target.value)}
                            className="w-full p-1 border border-cyan-300 focus:outline-none"
                        />
                    </div>
                    </div>
                ))
            }
        </div>
    )
}