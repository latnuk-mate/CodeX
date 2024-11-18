export default function ResumeContent({personal}){
    return(
        <div className="col-span-2 bg-gray-100 -mt-4 text-black pt-5">
            {
                
                personal && personal.map((item, index) => (
                    <div>
                        <h5 className="text-center text-2xl font-semibold">{personal.find(el => personal.indexOf(el) == index)}</h5>

                    </div>
                ))
            }
        </div>
    )
}