import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className="footer_container container">
            <h1 className="footer_title">Izima</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className='footer_link'>About</a>
                </li>

                <li>
                    <a href="#portfolio" className='footer_link'>Projects</a>
                </li>
                
                <li>
                    <a href="#contact" className='footer_link'>Contact</a>
                </li>
            </ul>

            <div className="footer_social">
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
        </div>
    </footer>
  )
}

export default Footer