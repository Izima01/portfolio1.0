import { BiLogoCss3, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoReact, BiLogoRedux, BiLogoTailwindCss } from 'react-icons/bi';
import { SiChakraui, SiBootstrap } from 'react-icons/si';
import './Skills.css';
import firebase from '../../assets/firebase.png';
import { motion } from 'framer-motion';

const skills = [
    {name: 'HTML', icon: <BiLogoHtml5 size={48} className='text-[#e34c26]' /> },
    {name: 'CSS3', icon: <BiLogoCss3 size={48} className='text-[#264ee4]' /> },
    {name: 'Bootstrap', icon: <SiBootstrap size={48} className='text-[#7310f6]' /> },
    {name: 'Tailwind', icon: <BiLogoTailwindCss size={48} className='text-[#38bdf8]' /> },
    {name: 'Chakra UI', icon: <SiChakraui size={48} className='text-[#319795]' /> },
    {name: 'Git', icon: <BiLogoGithub size={48} className='text-black' /> },
    {name: 'Javascript', icon: <BiLogoJavascript stroke='black' size={48} className='text-[#f1dc4f]' /> },
    {name: 'React', icon: <BiLogoReact size={48} className='text-[#149fca]' /> },
    {name: 'Redux', icon: <BiLogoRedux size={48} className='text-[#764abd]' /> },
    {name: 'Firebase', icon: <img src={firebase} loading="lazy" width={48} /> },
];

const Frontend = () => {
  return (
    <div className="skills__content ">
        <div className="skills__group flex flex-wrap justify-center gap-5 mt-6 w-full sm:w-10/12 mx-auto">
            {skills.map(({name, icon}, i) => (
                <motion.div key={i} initial={{ scale:0, opacity: 0, borderRadius:'100%' }} transition={{ type: 'spring', delay:0.15*i, duration: 1 }} whileInView={{ scale:1, opacity:1, borderRadius: '12px' }} className="skills__data flex items-center justify-center flex-col gap-2 loading-card shadow-md py-3 px-8 w-auto sm:px-8 rounded-xl">
                {icon}
                <h3 className="skill_name text-lg leading-5 font-semibold">{name}</h3>
            </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Frontend