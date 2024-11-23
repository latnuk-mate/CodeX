export default function ResumeContent({personal, socialSite, socialIcon}){
    function getIcon(icon){
        switch(icon){
            case 'github':
                return <i class="fa-brands fa-github"></i>
            case 'linkedIn':
                return <i class="fa-brands fa-linkedin"></i>
            case "website":
                return <i class="fa-solid fa-globe"></i>
            case 'facebook':
                return <i class="fa-brands fa-facebook"></i>
            case 'instagram':
                return <i class="fa-brands fa-instagram"></i>
            default:
                return ""
        }
    }


    return(
        <div className="col-span-2 bg-gray-100 mt-2 md:-mt-4 text-black pt-5 h-full md:h-screen overflow-y-auto">
            
        <div className="mb-1">
            <h5 className="text-2xl font-semibold text-center mb-1">{personal[0]}</h5>
            <h5 className="text-center text-[15px]">{personal[1]}</h5>
            <div className="flex items-center gap-3 justify-center text-[12px]">
                <p className="flex items-center gap-1">
                    <i className="fa fa-phone"></i>
                    {personal[2]}
                </p>
                <p className="flex items-center gap-1">
                    <i className="fa fa-envelope"></i>
                    {personal[3]}
                </p>
                <p className="flex items-center gap-1">
                    <i className="fa fa-location-dot"></i>
                    {personal[4]}
                </p>
            </div>
        </div>

            <div className="flex items-center justify-center text-sm gap-3">
                {socialIcon && socialIcon.map((item, index)=> (
                    <div className="flex items-center gap-1">
                          <h5>{getIcon(item)}</h5>
                          <h5>{socialSite[index]}</h5>
                    </div>
                ))}
          
            </div>
      
        </div>
    )
}