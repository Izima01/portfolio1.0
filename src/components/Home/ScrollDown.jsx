// import scroll from '../assets/scroll.svg';
import './Home.css';
import { AiOutlineArrowDown } from 'react-icons/ai'

const ScrollDown = () => {
  return (
    <div className="home_scroll ml-32 lg:ml-36 hidden md:block">
      <a href="#about" className="home_scroll-button inline-flex items-center">
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: 'evenodd',
            clipEule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 1.5
          }}
        >
          <path
            className="wheel"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: 'none',
              stroke: '#333333',
              strokeWidth: '20px'
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: 'none',
              stroke: '#333333',
              strokeWidth: '20px'
            }}
          ></path>
        </svg>
        <span className="home_scroll-name text-black font-medium mr-2 ml-6">Scroll Down</span>
        <AiOutlineArrowDown className='text-xl text-black' />
      </a>
    </div>
  )
}

export default ScrollDown