import { BiAward, BiBriefcase } from 'react-icons/bi'
import './About.css';

const Info = () => {
  return (
    <div className="about_info grid items-center gap-2 mb-8 justify-center lg:justify-start">

      <div className="about_box bg-white border border-[#0000001a] rounded-xl flex flex-col items-center px-2 lg:px-5 py-3 lg:py-4">
        <BiAward className='about_icon text-2xl text-[#333333] mb-2' />
        <h3 className="about_title font-medium">Experience</h3>
        <span className="about_subtitle text-sm">8 years working</span>
      </div>

      <div className="about_box bg-white border border-[#0000001a] rounded-xl flex flex-col items-center px-2 lg:px-5 py-3 lg:py-4">
        <BiBriefcase className='about_icon text-2xl text-[#333333] mb-2' />
        <h3 className="about_title font-medium">Completed</h3>
        <span className="about_subtitle text-sm">48 + Projects</span>
      </div>

    </div>
  )
}

export default Info