import { AiOutlineGithub, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

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
        </div>
    </footer>
  )
}

export default Footer