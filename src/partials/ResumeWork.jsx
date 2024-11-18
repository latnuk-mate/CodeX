export default function ResumeWork({works}){
    return(
        <div className="mt-3">
            {
                works && works.map((work, index) => (
                    <div key={index} className="working--item">
                            <input 
                            type="text" 
                            className="w-full px-3 border border-cyan-300 focus:outline-none"
                            
                            />
                            <input type="text" name="" id="" />
                    </div>
                ))
            }
        </div>
    )
}