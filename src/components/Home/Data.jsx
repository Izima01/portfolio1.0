import { motion } from 'framer-motion';
import hand from '../../assets/hand.svg';
import send from '../../assets/send.svg';
import './Home.css';

const Data = () => {
  return (
    <div className="home_data">
        <motion.h1 initial={{ scaleX:0.1, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} transition={{ duration: 1 }} className="font-semibold text-4xl sm:text-[2.75rem] mb-1">
            Izima Obisike
            <motion.img animate={{ rotate: [-20, 0, 20, 0, -20] }} transition={{ repeat:'infinite', repeatType: 'loop', duration: 2, type: 'keyframes' }} src={hand} alt="a hand" className='origin-bottom lg:w-9 lg:h-9 w-7 h-7 ml-2 inline-block mb-2' />
        </motion.h1>
        <motion.h3 initial={{ x: "100%", opacity: 0, scale: 0 }} whileInView={{ x: 0, opacity: 1, scale:1 }} transition={{ delay: 1, duration: 1 }} className="home_subtitle font-medium text-lg relative pl-14 lg:pl-20 mb-4 before:absolute lg:before:w-[4.3rem] before:w-10 before:h-px before:bg-black before:left-0 lg:before:top-4 before:top-3.5">Web Developer</motion.h3>
        <p className="home_desc max-w-[initial] lg:max-w-[25rem] mb-8 lg:mb-10">
            I am a web developer based in Lagos, Nigeria. I am very passionate and dilligent in my work and I love it.
        </p>
        <motion.a animate={{ scale:[0.8, 1.1, 1.2, 0.9, 1] }} transition={{ delay: 1 }} href="#contact" className='group inline-flex gap-2 bg-[#333333] text-white px-7 lg:px-8 py-4 lg:py-5 rounded-2xl font-medium items-center hover:bg-slate-700'>
            Say Hello
            <img src={send} alt="" className='w-6 lg:w-auto h-6 lg:h-auto group-hover:scale-125 group-hover:translate-x-2 group-hover:rotate-45 duration-700' />
        </motion.a>
    </div>
  )
}

export default Data