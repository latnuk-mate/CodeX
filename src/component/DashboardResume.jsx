import { ArrowDownCircleIcon, BookmarkIcon} from "@heroicons/react/16/solid";
import {useState } from "react";
import AddOrRemove from "../partials/Action";
import helper from "./helper/helper";
import details from '../assets/data.json';
import ResumeEducation from "../partials/ResumeEducation";
import Personal from "../partials/ResumePersonal";
import Social from "../partials/ResumeSocial";
import ResumeWork from "../partials/ResumeWork";
import ResumeContent from "./ResumeContent";

export default function Resume(){
    // multiple social inputs to create...
    // three different inputs...
    const PersonalDetails = details.data.personal;
    const [SocialMedia, setSocialMedia] = useState(details.data.social || []);
    const [Education, setEducation] = useState(details.data.education || []);
    const [Workdetail, setWorkDetail] = useState(details.data.work || []);

// for personal details area...
const [personal, setPersonal] = useState(PersonalDetails.map(item => item || ""))


    // demo inputs for social media part...
    const [socialIcon, setSocialIcon] = useState(SocialMedia.map((item) => item.icon || ""));
    const [socialSite, setSocialSite] = useState(SocialMedia.map((item) => item.link || ""));

    //  for summary...
    const [summary, setSummary] = useState(details.data.summary);


    // for [Edcuational part] custom inputs...
    const [newdegree , setNewdegree] = useState(Education.map((item) => item.role || ""));
    const [newSchool, setNewSchool] = useState(Education.map((item) => item.school || ""))
    const [NewadmitDate, setNewAdmitDate] = useState(Education.map((item) => item.admitDate || ""))
    const[NewcloseDate, setNewCloseDate] = useState(Education.map((item) => item.completeDate || ""))


    // WORK PART...


    // demo inputs for work part..
    const [work, setWork] = useState('');
    const [workExp, setWorkExp] = useState('');

    // demo details about the fields..
    const socialSites = {
            index: helper.genKey(), 
            text : "social media...", 
            link: "link"
        };
        const edDetails = {
            index: helper.genKey(), 
            school: 'school', 
            role: "degree",
            admitDate: "",
            completeDate: ""
        };

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="primary-bg p-3 -mt-4 xl:-ml-10 h-[300px] md:min-h-screen overflow-y-auto">
                <div className="mt-4 flex items-center gap-5">
                    <button className="element-btnPrimary w-full p-2 capitalize flex justify-center items-center gap-1">
                        <BookmarkIcon className="w-4 h-4" />
                        save
                    </button>
                    <button className="element-btnSecondary capitalize w-full p-2 flex justify-center items-center gap-2">
                        <ArrowDownCircleIcon className="w-5 h-5" />
                        download
                    </button>
                </div>

                {/* input area... */}
                <div className="mt-3">
                    {/* first part... */}
                    <Personal 
                        personal={personal}
                        setPersonal={setPersonal}
                        handlePersonal={helper.handleItem}
                        PersonalDetails={PersonalDetails}
                    />

                {/* second part... */}
                <div>
                 <Social 
                    SocialMedia={SocialMedia}
                    socialSite={socialSite}
                    socialIcon={socialIcon}
                    setSocialIcon={setSocialIcon}
                    setSocialSite={setSocialSite}
                    handleSocial={helper.handleItem}
                 />    
                {/* action area... */}
                    <AddOrRemove 
                    addBoxes={helper.addSocialMedia}
                    removeBoxes={helper.removeSocialMedia}
                    array={SocialMedia}
                    setArray={setSocialMedia}
                    obj={socialSites}
                />
             </div>


             {/* third part... */}
                <div className="mt-3">
                    <div className="mb-4">
                        <h5 className="text-lg mb-2">Summary</h5>
                        <textarea
                        className="w-full px-3 text-sm border border-cyan-300 focus:outline-none"
                        rows={5}
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}>
                    </textarea>
                 </div>

                 
                 {/* education section... */}
                        <ResumeEducation
                        education={Education}
                        newdegree={newdegree}
                        newSchool={newSchool}
                        NewadmitDate={NewadmitDate}
                        NewcloseDate={NewcloseDate}
                        handleEdu={helper.handleItem}
                        setNewAdmitDate={setNewAdmitDate}
                        setNewCloseDate={setNewCloseDate}
                        setNewDegree={setNewdegree}
                        setNewSchool={setNewSchool}
                        />
                      {/* action area... */}
                      <AddOrRemove 
                        addBoxes={helper.addEducation} 
                        removeBoxes={helper.removeEducation} 
                        array={Education}
                        setArray={setEducation}
                        obj={edDetails}
                    />
                </div>

                {/* fourth part... [work experience] */}

                <ResumeWork />
            </div>
            </div>

            {/* right side  */}
            <ResumeContent personal={personal}/>
        </div>
    )
}