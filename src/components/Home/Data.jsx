import hand from '../../assets/hand.svg';
import send from '../../assets/send.svg';
import './Home.css';

const Data = () => {
  return (
    <div className="home_data">
        <h1 className="font-semibold text-4xl sm:text-[2.75rem] mb-1">
            Izima Obisike
            <img src={hand} alt="a hand" className='lg:w-9 lg:h-9 w-7 h-7 ml-2 inline-block' />
        </h1>
        <h3 className="home_subtitle font-medium text-lg relative pl-14 lg:pl-20 mb-4 before:absolute lg:before:w-[4.3rem] before:w-10 before:h-px before:bg-black before:left-0 lg:before:top-4 before:top-3.5">Web Developer</h3>
        <p className="home_desc max-w-[initial] lg:max-w-[25rem] mb-10 lg:mb-12 ">
            I am a web developer based in Lagos, Nigeria. I am very passionate and dilligent in my work and I love it.
        </p>
        <a href="#contact" className='inline-flex gap-2 bg-[#333333] text-white px-7 lg:px-8 py-4 lg:py-5 rounded-2xl font-medium items-center hover:bg-black '>
            Say Hello
            <img src={send} alt="" className='w-6 lg:w-auto h-6 lg:h-auto' />
        </a>
    </div>
  )
}

export default Data