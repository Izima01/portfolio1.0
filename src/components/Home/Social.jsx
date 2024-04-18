import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import './Home.css';

const Social = () => {
  return (
    <div className='home_social grid gap-y-6'>
        <a
          href="https://ng.linkedin.com/in/obisike-izima-443aa7197"
          className="text-[#333333] hover:scale-125"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineLinkedin className='text-2xl md:text-3xl' />
        </a>

        <a
          href="https://twitter.com/IzimaObisike?t=oZIeCnWiHOFPg9xwEWCEUg&s=09"
          className="text-[#333333] hover:scale-125"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineTwitter className='text-2xl md:text-3xl' />
        </a>
        
        <a
          href="https://www.github.com/izima01"
          className="text-[#333333] hover:scale-125"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineGithub className='text-2xl md:text-3xl' />
        </a>
    </div>
  )
}

export default Social