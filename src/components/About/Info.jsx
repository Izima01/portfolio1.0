import { BiAward, BiBriefcase } from 'react-icons/bi'
import './About.css';
import { motion } from 'framer-motion';

const Info = () => {
  return (
    <div className="about_info grid grid-cols-1 items-center gap-4 justify-center md:w-4/5">
      <motion.div initial={{ y: -80, opacity: 0 }} whileInView={{ y:0, opacity: 1}} transition={{ duration: 0.6 }} className="about_box bg-white border border-[#0000001a] rounded-xl flex flex-col items-center px-2 lg:px-5 py-3 lg:py-4">
        <BiAward className='about_icon text-2xl text-[#333333] mb-2' />
        <h3 className="about_title font-medium">Experience</h3>
        <span className="about_subtitle text-sm">2+ years</span>
      </motion.div>

      <motion.div initial={{ y: -80, opacity: 0 }} whileInView={{ y:0, opacity: 1 }} transition={{ duration: 0.6 }} className="about_box bg-white border border-[#0000001a] rounded-xl flex flex-col items-center px-2 lg:px-5 py-3 lg:py-4">
        <BiBriefcase className='about_icon text-2xl text-[#333333] mb-2' />
        <h3 className="about_title font-medium">Completed</h3>
        <span className="about_subtitle text-sm">10 + Projects</span>
      </motion.div>

    </div>
  )
}

export default Info