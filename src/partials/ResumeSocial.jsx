export default function Social({
    SocialMedia,
    socialIcon,
    socialSite,
    setSocialIcon,
    setSocialSite,
    handleSocial
}) {
    return(
        <div className="mt-2">
        <h5 className="text-lg mb-2">Social Media</h5>
            {
            SocialMedia && SocialMedia.map((el, index) => (
                 <div className="flex items-center gap-4 mb-2" key={index}>
                    <input 
                        type="text"
                        placeholder={el.text}
                        value={socialIcon[index]}
                        onChange={(e) => handleSocial(socialIcon, setSocialIcon, index, e.target.value)} 
                        className="w-full p-1 block border border-cyan-300 focus:outline-none"
                    />
                    <input 
                    type="text"
                    placeholder={el.link}
                    value={socialSite[index]}
                    onChange={(e) => handleSocial(socialSite, setSocialSite , index, e.target.value)} 
                    className="w-full p-1 block border border-cyan-300 focus:outline-none"
                 />
            </div>
            ))
    
            }
         </div>
    )
}