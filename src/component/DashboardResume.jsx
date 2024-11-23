import { ArrowDownCircleIcon, BookmarkIcon} from "@heroicons/react/16/solid";
import {useState } from "react";
import AddOrRemove from "../partials/Action";
import helper from "./helper/helper";
import details from '../assets/data.json';
import data from '../assets/demo.json'
import ResumeEducation from "../partials/ResumeEducation";
import Personal from "../partials/ResumePersonal";
import Social from "../partials/ResumeSocial";
import ResumeWork from "../partials/ResumeWork";
import ResumeContent from "./ResumeContent";
import ResumeProject from "../partials/ResumeProject";
import ResumeTech from "../partials/ResumeTechskill";
import ResumeSoft from "../partials/ResumeSoftSkill";
import ResumeAdditional from "../partials/ResumeAdditional"
import ResumeLanguage from "../partials/ResumeLang"

export default function Resume(){
    // multiple social inputs to create...
    // three different inputs...
    const PersonalDetails = details.data.personal;
    const [SocialMedia, setSocialMedia] = useState(details.data.social || []);
    const [Education, setEducation] = useState(details.data.education || []);
    const [Workdetail, setWorkDetail] = useState(details.data.work || []);
    const [Project, setProject] = useState(details.data.projects || []);
    const [TechnicalDetails, setTechnicalDetails] = useState(details.data.Technical || [])
    const [softSkillsDetails, setSoftSkillDetails] = useState(details.data.softSkill || []);
    const [AdditionalSkills , setAdditionalSkills] = useState(details.data.additionalSkills || [])
    const [LanguageData , setLanguageData] = useState(details.data.languages || [])
    const CertificateData = details.data.certificate;
    
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
    const [company, setCompany] = useState(Workdetail.map(work => work.company || ""));
    const [workRole, setWorkRole] = useState(Workdetail.map(work => work.role || ""));
    const [workSummary, setWorkSummary] = useState(Workdetail.map(work => work.cpDetails || ""));
    const [workExp, setWorkExp] = useState(Workdetail.map(work => work.experience || ""));
    const [workJoin, setWorkJoin] = useState(Workdetail.map(work => work.joinDate || ""));
    const [workLeave, setWorkLeave] = useState(Workdetail.map(work => work.leaveDate || ""));


    // for project part..
    const [projectTitle, setProjectTitle] = useState(Project.map(item => item.title || ""));
    const [projectLink, setProjectLink] = useState(Project.map(item => item.link || ""));
    const [projectSummary, setProjectSummary] = useState(Project.map(item => item.summary || ""));
    const [projectExperience, setProjectExperience] = useState(Project.map(item => item.experience || ""));
    const [projectStart, setProjectStart] = useState(Project.map(item => item.startDate || ""));
    const [projectEnd, setProjectEnd] = useState(Project.map(item => item.endDate || ""));


    // tech skills..
    const [techSkill, setTechSkill] = useState(TechnicalDetails.map(item => item || ""))
    
    // soft skills..
    const [softSkill, setSoftSkill] = useState(softSkillsDetails.map(item => item || ""));

    // addtional skills..
    const [additional, setAdditional] = useState(AdditionalSkills.map(item => item || ""))
    
    // language settings...
    const [newLang, setNewLang] = useState(LanguageData.map(lang => lang || ""));

    // certification
    const [certificate, setCertificate] = useState(CertificateData.map(cert => cert || ""))

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
                    addBoxes={helper.handleAddItem}
                    removeBoxes={helper.handleRemoveItem}
                    array={SocialMedia}
                    setArray={setSocialMedia}
                    obj={data.demoData.socialSites}
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
                        addBoxes={helper.handleAddItem} 
                        removeBoxes={helper.handleRemoveItem} 
                        array={Education}
                        setArray={setEducation}
                        obj={data.demoData.edDetails}
                    />
                </div>

                {/* fourth part... [work experience] */}
                <div>
                <ResumeWork
                    works={Workdetail}
                    company={company}
                    setCompany={setCompany}
                    experience={workExp}
                    setExperience={setWorkExp}
                    summary={workSummary}
                    setSummary={setWorkSummary}
                    leaveDate={workLeave}
                    setLeaveDate={setWorkLeave}
                    joinDate={workJoin}
                    setJoinDate={setWorkJoin}
                    role={workRole}
                    setRole={setWorkRole}
                    handleWork={helper.handleItem}  
                 />
                 {/* action area... */}
                    <AddOrRemove 
                        addBoxes={helper.handleAddItem} 
                        removeBoxes={helper.handleRemoveItem} 
                        array={Workdetail}
                        setArray={setWorkDetail}
                        obj={data.demoData.workdetail}
                    />
                </div>


         {/* project details... */}
            <div>
                <ResumeProject
                    projects={Project}
                    title={projectTitle}
                    setTitle={setProjectTitle}
                    link={projectLink}
                    setLink={setProjectLink}
                    summary={projectSummary}
                    setSummary={setProjectSummary}
                    experience={projectExperience}
                    setExperience={setProjectExperience}
                    startDate={projectStart}
                    setStartDate={setProjectStart}
                    endDate={projectEnd}
                    setEndDate={setProjectEnd}
                    handleProject={helper.handleItem}
                />
                {/* action area... */}
                <AddOrRemove 
                    addBoxes={helper.handleAddItem} 
                    removeBoxes={helper.handleRemoveItem} 
                    array={Project}
                    setArray={setProject}
                    obj={data.demoData.projects}
                /> 
        </div>

        {/* technical details... */}
                <ResumeTech 
                    TechnicalDetails={TechnicalDetails}
                    setTechnicalDetails={setTechnicalDetails}
                    techSkill={techSkill}
                    setTechSkill={setTechSkill}
                    addItem={helper.handleAddItem}
                    removeItem={helper.handleRemoveItem}
                    handleTech={helper.handleItem}
                />

                {/* soft skills details... */}
                <ResumeSoft 
                    SoftSkills={softSkillsDetails}
                    setSoftSkills={setSoftSkillDetails}
                    skill={softSkill}
                    setSkill={setSoftSkill}
                    handleSoft={helper.handleItem}
                    addItem={helper.handleAddItem}
                    removeItem={helper.handleRemoveItem}
                
                />

                {/* additional skills... */}
                <ResumeAdditional 
                    AdditionalSkills={AdditionalSkills}
                    setAdditionalSkills={setAdditionalSkills}
                    skill= {additional}
                    setSkill={setAdditional}
                    handleAddition={helper.handleItem}
                    addItem={helper.handleAddItem}
                    removeItem={helper.handleRemoveItem}
                />

                {/* languages... */}
                <ResumeLanguage 
                    LanguageData={LanguageData}
                    setLanguageData={setLanguageData}
                    language={newLang}
                    setLanguage={setNewLang}
                    handleLanguage={helper.handleItem}
                    addItem={helper.handleAddItem}
                    removeItem={helper.handleRemoveItem}
                />

                {/* certification area... */}
                <div className="mt-3">
                    <h5 className="text-lg mb-3">Certification</h5>
                    <div className="cert">
                    {
                        CertificateData && CertificateData.map((item, index) => (
                            <input 
                            type="text"
                            placeholder="Add Certificates"
                            className="mb-4 w-full px-3 py-1 border border-cyan-300 focus:outline-none"
                            value={certificate[index]}
                            onChange={(e)=> helper.handleItem(certificate, setCertificate, index, e.target.value)}
                            />
                        ))
                    }
                    </div>
                </div>

            </div>
            </div>

            {/* right side  */}
            <ResumeContent personal={personal} socialSite={socialSite} socialIcon={socialIcon}/>
        </div>
    )
}