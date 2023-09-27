import { BiAward, BiBriefcase } from 'react-icons/bi'
import './About.css';
import { motion } from 'framer-motion';

const Info = () => {
  return (
    <div className="about_info grid items-center gap-3 mb-8 justify-center lg:justify-start overflow-x-hidden">

      <motion.div initial={{ x: 200, opacity: 0 }} whileInView={{ x:0, opacity: 1}} transition={{ duration: 1.5, delay: 0.5 }} className="about_box bg-white border border-[#0000001a] rounded-xl flex flex-col items-center px-2 lg:px-5 py-3 lg:py-4">
        <BiAward className='about_icon text-2xl text-[#333333] mb-2' />
        <h3 className="about_title font-medium">Experience</h3>
        <span className="about_subtitle text-sm">1+ years</span>
      </motion.div>

      <motion.div initial={{ x: 160, opacity: 0 }} whileInView={{ x:0, opacity: 1 }} transition={{ duration: 1 }} className="about_box bg-white border border-[#0000001a] rounded-xl flex flex-col items-center px-2 lg:px-5 py-3 lg:py-4">
        <BiBriefcase className='about_icon text-2xl text-[#333333] mb-2' />
        <h3 className="about_title font-medium">Completed</h3>
        <span className="about_subtitle text-sm">20 + Projects</span>
      </motion.div>

    </div>
  )
}

export default Info