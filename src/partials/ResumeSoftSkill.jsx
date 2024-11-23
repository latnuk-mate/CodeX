import AddOrRemove from "./Action";

export default function ResumeSoft(
    {
        SoftSkills,
        setSoftSkills,
        skill,
        setSkill,
        handleSoft,
        addItem,
        removeItem,

    }
){
    return(
        <div className="mt-3">
        <h5 className="text-lg mb-3">Soft Skills</h5>
            <div className="mb-2">
                {
                    SoftSkills && SoftSkills.map((item, index)=>(
                        <input 
                        type="text"
                        placeholder="Soft Skill"
                       className="mb-3 w-full px-3 py-1 border border-cyan-300 focus:outline-none"
                        value={skill[index]}
                        onChange={(e)=> handleSoft(skill, setSkill, index, e.target.value)}
                        />
                    ))
                }
            </div>

            <AddOrRemove 
                    addBoxes={addItem} 
                    removeBoxes={removeItem} 
                    array={SoftSkills}
                    setArray={setSoftSkills}
                /> 

    </div>
    )
}