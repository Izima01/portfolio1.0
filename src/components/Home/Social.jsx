import { AiOutlineInstagram, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import './Home.css';

const Social = () => {
  return (
    <div className='home_social grid gap-y-4'>
        <a
          href="https://wwww.instagram.com/"
          className="home_social-icon text-xl text-[#333333]"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineInstagram />
        </a>

        <a
          href="https://wwww.twitter.com/"
          className="home_social-icon text-xl text-[#333333]"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineTwitter />
        </a>
        
        <a
          href="https://wwww.github.com/"
          className="home_social-icon text-xl text-[#333333]"
          rel='noreferrer'
          target="_blank"
        >
          <AiOutlineGithub />
        </a>
    </div>
  )
}

export default Social