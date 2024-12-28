
import Sidebar from './Sidebar';
import DashboardProfile from './DashboardProfile';
import DashboardRefer from './DashboardRefer';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import DashboardCert from './DashboardCert';
import Topbar from './DashboardTop';
import Hackathon from './DashboardHack';
import Resume from './DashboardResume';
import helper from '../helper/helper';

function Dashboard({showAndHide, pointer}) {
  const  {query} = useParams();

  const element = useRef();


  function showSideBar(pointer){
    if(pointer.current.classList.contains('hidden')){
        pointer.current.classList.remove('hidden');
        pointer.current.classList.add('block')
        // console.log(true);
        
    }else{
      pointer.current.classList.remove('block');
      pointer.current.classList.add('hidden')
    }
      
  }

  function setBackground(e, element){
    const list = Array.from(element.current.children);
    list.forEach(item => {
        item.classList.remove('active');
    });
   e.target.classList.add('active');

   changeContent(e, element);
    
}


  function changeContent(e, element){
    const items = document.querySelectorAll('.course--item');

      if(element.current.classList.contains('navigation')){
          const value = e.target.dataset['filter'];
          items.forEach(item => {
            const id = item.getAttribute('id');
    
            if(item.classList.contains('show')){
              item.classList.remove('show');
            }else{
              item.classList.remove('hide');
            }
            
            if(value == 'All'){
              item.classList.add('show');
            }else if(id === value){
              item.classList.add('show');
            }else{
              item.classList.add('hide');
            }
            
          });

      }
  
  }




  return (
    <div className='dashboard lg:grid grid-cols-4'>
        {/* sidebar */}
        <Sidebar query={query} changeBg={setBackground} logOut={helper.logOut} pointer={element} clickToSee={showSideBar}/>

      {/* main content */}
       <main className='col-span-3'>
        {(query !== 'profile') && <Topbar showAndHide={showAndHide} pointer={pointer} logOut={helper.logOut} clickToSee={showSideBar} element={element} />
        
        }
            {
              (query === 'profile')&& <DashboardProfile changeBg={setBackground} element={element} clickToSee={showSideBar}/>
            }

            {
              (query === "refer") && <DashboardRefer/>
            }
            {
              (query === "cert") && <DashboardCert/>
            }
            {
              (query === "hackathon") && <Hackathon/>
            }

            {
              (query === "resume") && <Resume />
            }
       </main>

    </div>
  )
}

export default Dashboard;