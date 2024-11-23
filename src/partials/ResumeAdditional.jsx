import AddOrRemove from "./Action";

export default function ResumeAdditional(
    {
        AdditionalSkills,
        setAdditionalSkills,
        skill,
        setSkill,
        handleAddition,
        addItem,
        removeItem,

    }
){
    return(
        <div className="mt-3">
        <h5 className="text-lg mb-3">Additional Skills</h5>
            <div className="mb-2">
                {
                    AdditionalSkills && AdditionalSkills.map((item, index)=>(
                        <input 
                        type="text"
                        placeholder="Additional Skill"
                       className="mb-3 w-full px-3 py-1 border border-cyan-300 focus:outline-none"
                        value={skill[index]}
                        onChange={(e)=> handleAddition(skill, setSkill, index, e.target.value)}
                        />
                    ))
                }
            </div>

            <AddOrRemove 
                    addBoxes={addItem} 
                    removeBoxes={removeItem} 
                    array={AdditionalSkills}
                    setArray={setAdditionalSkills}
                /> 

    </div>
    )
}