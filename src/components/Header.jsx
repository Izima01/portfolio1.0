import { BiHomeAlt, BiUser, BiFile, BiImage, BiSend } from 'react-icons/bi'
import { AiOutlineClose, AiOutlineAppstore } from 'react-icons/ai';
import { useState } from 'react';
const navClass = 'md:hidden block text-xl';

const navs = [
    {
        name: 'Home', link: '#home', icon: <BiHomeAlt stroke='blue' className={navClass} />
    },
    {
        name: 'About', link: '#about', icon: <BiUser stroke='blue' className={navClass} />
    },
    {
        name: 'Skills', link: '#skills', icon: <BiFile stroke='blue' className={navClass} />
    },
    {
        name: 'Projects', link: '#projects', icon: <BiImage stroke='blue' className={navClass} />
    },
    {
        name: 'Contact', link: '#contact', icon: <BiSend stroke='blue' className={navClass} />
    }
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='w-full fixed md:top-0 bottom-0 md:bottom-[initial] top-[initial] left-0 bg-[#fafafa] z-10'>
        <nav className="max-w-[968px] mx-auto px-8 lg:px-0 flex justify-between items-center gap-x-4 h-12 md:h-[4.5rem]">
            <a href="/" className='text-[#333333] font-medium hod'>Izima Obisike</a>
            <div className={`fixed md:static ${ showMenu ? 'bottom-0' : '-bottom-full'} left-0 w-full md:w-auto pt-8 md:p-0 px-6 pb-16 nav_menu z-50 bg-white md:bg-transparent duration-500`}>
                <ul className="md:flex grid grid-cols-3 gap-8 md:gap-x-8 list-none">
                    {navs.map(({name, link, icon}, i) => {
                        return (
                            <li className="" key={i}>
                                <a href={link} className="flex flex-col items-center text-[#333333] font-medium transition duration-300 hover:text-black active:text-black">
                                    {icon}
                                    {name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <button className='text-[#333333] font-medium'> */}
                    <AiOutlineClose className='md:hidden block text-[#333333] font-medium absolute md:static right-6 bottom-4 cursor-pointer text-2xl hover:text-black' onClick={() => setShowMenu(false)} />
                {/* </button> */}
            </div>
            <AiOutlineAppstore onClick={() => setShowMenu(true)} className='text-[#333333] font-medium md:hidden block cursor-pointer text-xl' />
        </nav>
    </header>
  )
}

export default Header