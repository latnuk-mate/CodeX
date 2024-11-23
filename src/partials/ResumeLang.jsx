import AddOrRemove from "./Action";

export default function ResumeLanguage(
    {
        LanguageData,
        setLanguageData,
        language,
        setLanguage,
        handleLanguage,
        addItem,
        removeItem,

    }
){
    return(
        <div className="mt-3">
        <h5 className="text-lg mb-3">Languages</h5>
            <div className="mb-2">
                {
                    LanguageData && LanguageData.map((item, index)=>(
                        <input 
                        type="text"
                        placeholder="Add Language"
                       className="mb-3 w-full px-3 py-1 border border-cyan-300 focus:outline-none"
                        value={language[index]}
                        onChange={(e)=> handleLanguage(language, setLanguage, index, e.target.value)}
                        />
                    ))
                }
            </div>

            <AddOrRemove 
                    addBoxes={addItem} 
                    removeBoxes={removeItem} 
                    array={LanguageData}
                    setArray={setLanguageData}
                /> 

    </div>
    )
}