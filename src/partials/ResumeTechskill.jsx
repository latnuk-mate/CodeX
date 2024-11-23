import AddOrRemove from "./Action";

export default function ResumeTech(
    {
        TechnicalDetails,
        setTechnicalDetails,
        techSkill,
        setTechSkill,
        handleTech,
        addItem,
        removeItem,

    }
){
    return(
        <div className="mt-3">
        <h5 className="text-lg mb-3">Technical Skills</h5>
            <div className="mb-2">
                {
                    TechnicalDetails && TechnicalDetails.map((item, index)=>(
                        <input 
                        type="text"
                        placeholder="Technical Skills"
                       className="mb-3 w-full px-3 py-1 border border-cyan-300 focus:outline-none"
                        value={techSkill[index]}
                        onChange={(e)=> handleTech(techSkill, setTechSkill, index, e.target.value)}
                        />
                    ))
                }
            </div>

            <AddOrRemove 
                    addBoxes={addItem} 
                    removeBoxes={removeItem} 
                    array={TechnicalDetails}
                    setArray={setTechnicalDetails}
                /> 

    </div>
    )
}