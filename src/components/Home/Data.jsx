import { motion } from 'framer-motion';
import hand from '../../assets/hand.svg';
import send from '../../assets/send.svg';
import './Home.css';

const Data = () => {
  return (
    <div className="home_data">
        <motion.h1 initial={{ scaleX:0.1, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} transition={{ duration: 0.75 }} className="font-semibold text-4xl sm:text-[2.75rem] mb-1">
            Izima Obisike
            <motion.img
              loading='lazy'
              animate={{ rotate: [-20, 0, 20, 0, -20] }}
              transition={{ repeat:'infinite', repeatType: 'loop', duration: 2, type: 'keyframes' }}
              src={hand}
              alt="a hand"
              className='origin-bottom lg:w-9 lg:h-9 w-7 h-7 ml-2 inline-block mb-2'
            />
        </motion.h1>
        <h3 className="home_subtitle font-medium text-lg relative pl-14 lg:pl-20 mb-4 before:absolute lg:before:w-[4.3rem] before:w-10 before:h-px before:bg-black before:left-0 lg:before:top-4 before:top-3.5">Full-Stack Developer</h3>
        <p>
            I am a full stack web developer based in Lagos, Nigeria. I am very passionate and dilligent in my work and I love it.
        </p>
        <a href="#contact" className='group inline-flex gap-2 bg-[#333333] text-white px-7 hover:px-5 lg:px-8 lg:hover:px-6 py-4 hover:py-3 lg:py-5 lg:hover:py-4 rounded-2xl font-medium items-center hover:bg-slate-700 hover:text-xl mt-4'>
            Say Hello
            <img loading='lazy' width={32} height={32} src={send} alt="" className='w-6 lg:w-auto h-6 lg:h-auto group-hover:scale-110 group-hover:-translate-x-1 group-hover:rotate-45 duration-700' />
        </a>
    </div>
  )
}

export default Data