import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import './Home.css';

const Social = () => {
  return (
    <div className='home_social grid gap-y-4'>
        <a
          href="https://ng.linkedin.com/in/obisike-izima-443aa7197"
          className="home_social-icon  text-[#333333]"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineLinkedin className='text-2xl sm:text-xl' />
        </a>

        <a
          href="https://twitter.com/IzimaObisike?t=oZIeCnWiHOFPg9xwEWCEUg&s=09"
          className="home_social-icon  text-[#333333]"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineTwitter className='text-2xl sm:text-xl' />
        </a>
        
        <a
          href="https://www.github.com/izima01"
          className="home_social-icon  text-[#333333]"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineGithub className='text-2xl sm:text-xl' />
        </a>
    </div>
  )
}

export default Social