import { BiLogoCss3, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoReact, BiLogoRedux, BiLogoTailwindCss } from 'react-icons/bi';
import { SiChakraui, SiBootstrap } from 'react-icons/si';
import './Skills.css';
import firebase from '../../assets/firebase.png';

const skills = [
    {name: 'HTML', icon: <BiLogoHtml5 className='text-[#e34c26] text-5xl' /> },
    {name: 'CSS3', icon: <BiLogoCss3 className='text-[#264ee4] text-5xl' /> },
    {name: 'Bootstrap', icon: <SiBootstrap className='text-[#7310f6] text-5xl' /> },
    {name: 'Tailwind', icon: <BiLogoTailwindCss className='text-[#38bdf8] text-5xl' /> },
    {name: 'Chakra UI', icon: <SiChakraui className='text-[#319795] text-5xl' /> },
    {name: 'Javascript', icon: <BiLogoJavascript stroke='black' className='text-[#f1dc4f] text-5xl' /> },
    {name: 'React', icon: <BiLogoReact className='text-[#149fca] text-5xl' /> },
    {name: 'Redux', icon: <BiLogoRedux className='text-[#764abd] text-5xl' /> },
    {name: 'Git', icon: <BiLogoGithub className='text-black text-5xl' /> },
    {name: 'Firebase', icon: <img src={firebase} className='w-12' /> },
];

const Frontend = () => {
  return (
    <div className="skills__content ">
        <div className="skills__group flex flex-wrap gap-y-7 justify-between sm:justify-center sm:gap-7 mt-6 w-full sm:w-10/12 mx-auto">
            {skills.map(({name, icon}, i) => (
                <div key={i} className="skills__data flex items-center justify-center flex-col gap-2 loading-card shadow-md py-3 px-8 rounded-xl">
                {/* <BiLogoHtml5 className=' text-5xl text-slate-600' /> */}
                {icon}
                <h3 className="skill_name text-lg leading-5 font-semibold">{name}</h3>
            </div>
            ))}
            
            
        </div>
    </div>
  )
}

export default Frontend