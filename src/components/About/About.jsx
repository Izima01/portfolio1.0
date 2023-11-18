import '../../App.css';
import aboutImg from '../../assets/about.jpeg';
import CV from '../../assets/Resume-Obisike-Izima.pdf';
import Info from './Info';
import file from '../../assets/files.svg';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about section max-w-[968px] px-8 lg:px-0 mx-auto" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about_container grid items-center md:gap-x-12 gap-y-10">
            <motion.img loading="lazy" initial={{ rotate: 270, x:-300, opacity: 0, borderRadius: '100%' }} animate={{ rotate: [240, 160, 70, 0], x:[-300, -200, -10, 0], opacity: [0, 0.3, 0.7, 1], borderRadius: ['100%', '70%', '30%', '24px'] }} transition={{ delay: 0.5, duration: 2 }} src={aboutImg}  alt="" className='about_Img rounded-3xl justify-self-center w-56 md:w-[22rem]' />
            <div className='about_data lg:text-left text-center'>
                <Info />

                <p className='about_desc p-0 sm:py-0 sm:px-20 lg:pr-16 lg:pl-0 mb-8 lg:mb-10'>Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.</p>
                
                <a href={CV} download='' className="button button--flex inline-flex gap-2">
                    Download CV
                    <img loading="lazy" src={file} alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default About