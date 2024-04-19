/* eslint-disable react/prop-types */
import { AiOutlineGithub } from 'react-icons/ai';

const ProjectItems = ({ title, image, stack, description, github, live, id }) => {
    return (
        <article className={`overflow-hidden flex gap-4 items-center md:items-stretch flex-col md:flex-row border-b-slate-400 border-b-2 md:border-none pb-2 md:pb-0 ${id % 2 == 0 ? 'md:flex-row-reverse' : ''} w-full md:h-[21rem]`}>
            <img
                width={560}
                // height={340}
                loading='lazy'
                src={image} alt={title}
                className='h-full'
            />
            <div className="card_body w-full md:w-5/12 p-2">
                <h3 className="text-2xl font-semibold text-black mb-4">{title}</h3>
                <p className="text-[#757575] mb-2">{description}</p>
                <ul className="flex gap-2.5 mb-6 flex-wrap">
                    {stack.map((st, i) => (
                        <li className="px-4 text-sm py-1 bg-white rounded-md shadow-md shadow-slate-300" key={i}>{st}</li>
                    ))}
                </ul>
                <div className='flex gap-6'>
                    <a href={github} className='no-underline text-lg border border-slate-300 rounded-lg hover:bg-slate-600 hover:text-white py-1 px-2 bg-slate-200'>
                        {/* Github */}
                        <AiOutlineGithub className='text-3xl' />
                    </a>

                    <a rel='noreferrer' target='_blank' href={live} className='inline-flex items-center no-underline text-lg border border-slate-200 bg-slate-500 rounded-lg hover:bg-slate-300 text-white hover:text-black px-5 py-1'>
                        Visit
                    </a>
                </div>
            </div>
        </article>
    )
}

export default ProjectItems