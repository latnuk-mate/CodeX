
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ExploreArea from './ExploreArea';

function Instructor() {

  return (
    <div className='mb-20 p-2 pattern'>
    <div className='max-w-[1200px] m-auto mb-10'>
        <div className="heading--part ps-10 tracking-wider">
            <h5 className='highlightedText text-4xl mb-2 uppercase'>Meet Our Team</h5>
            <p className='text-gray-400 text-xl tracking-wide'>Explore the talented educators shaping your learning journey!</p>
        </div>
    <div className="max-w-[900px] m-auto px-6 py-4 primary-bg testimony-carousel mt-24">
    <OwlCarousel
    className='owl-theme' loop 
    margin={10} nav
    navText={
        [
       	"<i class='fa fa-chevron-left'></i>",
      	"<i class='fa fa-chevron-right'></i>"
        ]
        }
    dots={false} 
    items={1}
    mouseDrag
    touchDrag
    autoplay>
    <div className="item py-8">
        <div className="img--box w-[80px] h-[80px] overflow-hidden m-auto mb-0">
                <img src="/instructor1.jpg" alt="" className='w-full h-full object-cover rounded-full'/>
        </div>
        <h5 className='highlightedText text-center text-2xl tracking-wider mb-0'>Jhon Doe</h5>
        <h5 className='text-gray-600 text-lg text-center mb-4 tracking-wide'>Web Developer, Instructor@CodeX</h5>
    <p className='text-gray-400 text-lg text-center'>
    Jhon Doe is a passionate software developer and educator with over 10 years of experience in the tech industry.
    With a degree in Computer Science from Stanford University, Jhon has worked at leading tech companies, 
    contributing to projects that range from mobile applications to complex web systems.
    </p>
    </div>

    <div className="item py-8">
            <div className="img--box w-[80px] h-[80px] overflow-hidden m-auto mb-0">
                    <img src="/instructor2.jpg" alt="" className='w-full h-full object-cover rounded-full'/>
            </div>
        <h5 className='highlightedText text-center text-2xl tracking-wider mb-0'>Katy Parry</h5>
        <h5 className='text-gray-600 text-lg text-center mb-4 tracking-wide'>Web Developer, Instructor@CodeX</h5>
    <p className='text-gray-400 text-lg text-center'>
    Katy Parry is a passionate software developer and educator with over 10 years of experience in the tech industry.
    With a degree in Computer Science from Stanford University, Katty has worked at leading tech companies, 
    contributing to projects that range from mobile applications to complex web systems.
    </p>
    </div>
    </OwlCarousel>
    </div>


    {/* exploring section... */}
    <ExploreArea />

</div>
</div>
  )
}

export default Instructor;