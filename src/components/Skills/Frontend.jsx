import { BiLogoHtml5 } from 'react-icons/bi';
import './Skills.css';

const Frontend = () => {
  return (
    <div className="skills__content ">

        {/* <div className="skills_box mt-6 flex justify-center gap-x-10"> */}
            <div className="skills__group flex flex-wrap justify-between sm:justify-normal sm:gap-7 mt-6 w-full sm:w-3/4 mx-auto">
                <div className="skills__data flex items-center justify-center flex-col gap-2 loading-card shadow-md py-3 px-12 rounded-xl">
                    {/* <div className-'gradient'></div> */}
                    <BiLogoHtml5 className=' text-6xl text-slate-600' />
                    <h3 className="skill_name text-lg leading-5 font-semibold">HTML</h3>
                </div>
                
                <div className="skills__data flex items-center justify-center flex-col gap-2 loading-card shadow-md py-3 px-12 rounded-xl">
                    <BiLogoHtml5 className=' text-6xl text-slate-600' />
                    <h3 className="skill_name text-lg leading-5 font-semibold">HTML</h3>
                </div>
                
                <div className="skills__data flex items-center justify-center flex-col gap-2 loading-card shadow-md py-3 px-12 rounded-xl">
                    <BiLogoHtml5 className=' text-6xl text-slate-600' />
                    <h3 className="skill_name text-lg leading-5 font-semibold">HTML</h3>
                </div>
                
                <div className="skills__data flex items-center justify-center flex-col gap-2 loading-card shadow-md py-3 px-12 rounded-xl">
                    <BiLogoHtml5 className=' text-6xl text-slate-600' />
                    <h3 className="skill_name text-lg leading-5 font-semibold">HTML</h3>
                </div>
                
                <div className="skills__data flex items-center justify-center flex-col gap-2 loading-card shadow-md py-3 px-12 rounded-xl">
                    <BiLogoHtml5 className=' text-6xl text-slate-600' />
                    <h3 className="skill_name text-lg leading-5 font-semibold">HTML</h3>
                </div>
                
                <div className="skills__data flex items-center justify-center flex-col gap-2 loading-card shadow-md py-3 px-12 rounded-xl">
                    <BiLogoHtml5 className=' text-6xl text-slate-600' />
                    <h3 className="skill_name text-lg leading-5 font-semibold">HTML</h3>
                </div>

                <div className="skills__data flex items-center justify-center flex-col gap-2 loading-card shadow-md py-3 px-12 rounded-xl">
                    <BiLogoHtml5 className=' text-6xl text-slate-600' />
                    <h3 className="skill_name text-lg leading-5 font-semibold">HTML</h3>
                </div>
                
                <div className="skills__data flex items-center justify-center flex-col gap-2 loading-card shadow-md py-3 px-12 rounded-xl">
                    <BiLogoHtml5 className=' text-6xl text-slate-600' />
                    <h3 className="skill_name text-lg leading-5 font-semibold">HTML</h3>
                </div>

            </div>
        {/* </div> */}
    </div>
  )
}

export default Frontend