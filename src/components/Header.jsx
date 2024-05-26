import { BiHomeAlt, BiUser, BiCodeAlt, BiSend } from 'react-icons/bi'
import { AiOutlineClose, AiOutlineAppstore, AiOutlineSetting } from 'react-icons/ai';
import { useState } from 'react';

const navClass = 'text-xl mr-2 group-hover:text-2xl group-hover:mr-1 transition-all duration-500 ease-in-out';

const navs = [
    {
        name: 'Home', link: '#home', icon: <BiHomeAlt stroke='blue' className={navClass} />
    },
    {
        name: 'About', link: '#about', icon: <BiUser stroke='blue' className={navClass} />
    },
    {
        name: 'Skills', link: '#skills', icon: <AiOutlineSetting stroke='blue' className={navClass} />
    },
    {
        name: 'Projects', link: '#projects', icon: <BiCodeAlt stroke='blue' className={navClass} />
    },
    {
        name: 'Contact', link: '#contact', icon: <BiSend stroke='blue' className={navClass} />
    }
];

// eslint-disable-next-line react/prop-types
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [lower, setLower] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 80) {
            setLower(true);
        } else {
            setLower(false);
        }
    });

  return (
    <header className={`w-full fixed md:top-0 bottom-0 md:bottom-[initial] top-[initial] left-0 bg-[#fafafa] z-10 ${lower ? 'scrollHeader' : ''}`}>
        <nav className="max-w-[968px] mx-auto px-8 lg:px-0 flex justify-between items-center gap-x-4 h-12 md:h-[4.5rem]">
            <a href="/" className='text-[#994355] font-semibold text-xl uppercase'>Izima Obisike</a>
            <div className={`fixed md:static ${showMenu ? 'bottom-0' : '-bottom-full'} left-0 w-full md:w-auto pt-8 md:p-0 px-6 pb-16 nav_menu z-50 bg-white md:bg-transparent duration-500`}>
                <ul className="md:flex grid grid-cols-3 gap-8 md:gap-x-8 list-none">
                    {navs.map(({name, link, icon}, i) => {
                        return (
                            <li className="" key={i}>
                                <a href={link} className="group flex flex-col md:flex-row items-center text-[#333333] font-medium transition duration-300 hover:text-black active:text-black">
                                    {icon}
                                    <span className='group-hover:font-semibold transition-all duration-300 ease-in-out'>{name}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <AiOutlineClose className='md:hidden block text-[#333333] font-medium absolute md:static right-6 bottom-4 cursor-pointer text-2xl hover:text-black' onClick={() => setShowMenu(false)} />
            </div>
            <AiOutlineAppstore onClick={() => setShowMenu(true)} className='text-[#333333] font-medium md:hidden block cursor-pointer text-xl' />
        </nav>
    </header>
  )
}

export default Header