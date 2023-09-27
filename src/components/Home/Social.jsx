import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import './Home.css';
import { motion } from 'framer-motion';

const Social = () => {
  return (
    <div className='home_social grid gap-y-4'>
        <motion.a
          initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.6, type: 'spring' }} whileInView={{ y: 0, opacity: 1 }}
          href="https://ng.linkedin.com/in/obisike-izima-443aa7197"
          className="home_social-icon  text-[#333333]"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineLinkedin className='text-2xl sm:text-xl' />
        </motion.a>

        <motion.a
          initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2, type: 'spring' }} whileInView={{ y: 0, opacity: 1 }}
          href="https://twitter.com/IzimaObisike?t=oZIeCnWiHOFPg9xwEWCEUg&s=09"
          className="home_social-icon  text-[#333333]"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineTwitter className='text-2xl sm:text-xl' />
        </motion.a>
        
        <motion.a
          initial={{ y: -100, opacity: 0 }} transition={{ duration: 0.8, type: 'spring' }} whileInView={{ y: 0, opacity: 1 }}
          href="https://www.github.com/izima01"
          className="home_social-icon  text-[#333333]"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineGithub className='text-2xl sm:text-xl' />
        </motion.a>
    </div>
  )
}

export default Social