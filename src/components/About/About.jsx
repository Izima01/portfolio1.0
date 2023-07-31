import '../../App.css';
import aboutImg from '../../assets/about.jpg';
import CV from '../../assets/Resume-Obisike-Izima.pdf';
import Info from './Info';
import file from '../../assets/files.svg';
import './About.css';

const About = () => {
  return (
    <div className="about section max-w-[968px] px-8 lg:px-0 mx-auto" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about_container grid items-center lg:gap-x-16 gap-y-10 lg:gap-y-0">
            <img src={aboutImg}  alt="" className='about_Img rounded-3xl justify-self-center w-56 lg:w-[22rem]' />
            <div className='about_data lg:text-left text-center'>
                <Info />

                {/* <p className='about_desc p-0 sm:py-0 sm:px-20 lg:pr-16 lg:pl-0 mb-8 lg:mb-10'>Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.</p> */}
                
                <a href={CV} download='' className="button button--flex inline-flex gap-2">
                    Download CV
                    <img src={file} alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default About