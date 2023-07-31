/* eslint-disable react/prop-types */
import { AiOutlineGithub } from 'react-icons/ai';

const ProjectItems = ({ title, image, stack, description, github, live, id }) => {
    console.log(id%2);
    return (
        <article className={`flex gap-4 items-center flex-col md:flex-row border-b-slate-400 border-b-2 md:border-none pb-3 md:pb-0 ${id % 2 == 0 ? 'md:flex-row-reverse' : ''} w-full`}>
            <img src={image} alt="" className="w-full md:w-7/12 md:h-80" />
            <div className="card_body w-full md:w-5/12 p-2">
                <h3 className="text-2xl font-semibold text-black mb-6">{title}</h3>
                <p className="text-[#757575] mb-3">{description}</p>
                <ul className="flex gap-2 mb-8 flex-wrap">
                    {stack.map((st, i) => (
                        <li className="px-5 py-1 bg-white rounded-md shadow-md shadow-slate-300" key={i}>{st}</li>
                    ))}
                </ul>
                <div className='flex gap-6'>
                    <a href={github} className='inline-flex items-center no-underline text-lg border border-slate-300 rounded-lg hover:bg-slate-400 hover:text-white px-5 py-2 bg-slate-200'>
                        Github
                        <AiOutlineGithub className='pl-2 text-2xl' />
                    </a>

                    <a href={live} className='inline-flex items-center no-underline text-lg border border-slate-200 bg-slate-500 rounded-lg hover:bg-slate-300 text-white px-5 py-2'>
                        Visit site
                    </a>
                </div>
            </div>
        </article>
    )
}

export default ProjectItems