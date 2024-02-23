import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import './Home.css';
import { motion } from 'framer-motion';

const Social = () => {
  return (
    <div className='home_social grid gap-y-8'>
        <motion.a
          transition={{ duration: 2, repeat:'infinite', repeatType: 'loop', type: 'keyframes' }}
          animate={{ scale: [1, 1.15, 1, 0.9] }}
          href="https://ng.linkedin.com/in/obisike-izima-443aa7197"
          className="home_social-icon  text-[#333333]"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineLinkedin className='text-2xl md:text-4xl' />
        </motion.a>

        <motion.a
          transition={{ duration: 2, repeat:'infinite', repeatType: 'loop', type: 'keyframes' }}
          animate={{ scale: [1, 1.15, 1, 0.9] }}
          href="https://twitter.com/IzimaObisike?t=oZIeCnWiHOFPg9xwEWCEUg&s=09"
          className="home_social-icon  text-[#333333]"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineTwitter className='text-2xl md:text-4xl' />
        </motion.a>
        
        <motion.a
          transition={{ duration: 2, repeat:'infinite', repeatType: 'loop', type: 'keyframes' }}
          animate={{ scale: [1, 1.15, 1, 0.9] }}
          href="https://www.github.com/izima01"
          className="home_social-icon  text-[#333333]"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineGithub className='text-2xl md:text-4xl' />
        </motion.a>
    </div>
  )
}

export default Social