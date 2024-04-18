import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="bg-white border-t-[#0000001a]">
        <div className="footer_container cont pt-8 px-0 pb-24">
            <h1 className="footer_title text-center mb-8 text-[#333333]">Izima</h1>

            <ul className="footer_list flex justify-center gap-x-6 mb-8">
                <li>
                    <a href="#about" className='footer_link text-[#333333] hover:text-black'>About</a>
                </li>

                <li>
                    <a href="#portfolio" className='footer_link text-[#333333] hover:text-black'>Projects</a>
                </li>
                
                <li>
                    <a href="#contact" className='footer_link text-[#333333] hover:text-black'>Contact</a>
                </li>
            </ul>

            <div className="footer_social flex justify-center gap-x-5">
                <a
                    href="https://ng.linkedin.com/in/obisike-izima-443aa7197"
                    className="footer_social-link text-white bg-[#333333] text-xl p-2 rounded-lg inline-flex hover:bg-black"
                    rel='noreferrer'
                    target="_blank"
                >
                    <AiOutlineLinkedin className='text-2xl sm:text-xl' />
                </a>

                <a
                    href="https://twitter.com/IzimaObisike?t=oZIeCnWiHOFPg9xwEWCEUg&s=09"
                    className="footer_social-link text-white bg-[#333333] text-xl p-2 rounded-lg inline-flex hover:bg-black"
                    rel='noreferrer'
                    target="_blank"
                >
                    <AiOutlineTwitter className='text-2xl sm:text-xl' />
                </a>
                    
                <a
                    href="https://www.github.com/izima01"
                    className="footer_social-link text-white bg-[#333333] text-xl p-2 rounded-lg inline-flex hover:bg-black"
                    rel='noreferrer'
                    target="_blank"
                >
                    <AiOutlineGithub className='text-2xl sm:text-xl' />
                </a>
            </div>
            {/* <span className="footer_copy"></span> */}
        </div>
    </footer>
  )
}

export default Footer