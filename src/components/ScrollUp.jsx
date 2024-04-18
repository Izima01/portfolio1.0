import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai'

const ScrollUp = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (window.scrollY >= (0.7 * window.innerHeight)) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [window.scrollY])

    // window.addEventListener('scroll', () => {
    // });

    return (
        <a href="#" className={`scrollUp fixed right-6 lg:right-10 ${show ? 'md:bottom-12 bottom-16' : '-bottom-1/4'} bg-[#333333] opacity-80 px-2 py-[0.4rem] z-30 duration- hover:bg-black rounded-md`}>
            <AiOutlineArrowUp className='text-xl md:text-2xl text-white' />
        </a>
    )
}

export default ScrollUp