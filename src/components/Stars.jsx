import './Stars.css';
import { IoIosStar } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Stars = ({ showStars }) => {
  return (
    <>
      <span className={showStars ? 'star' : 'star stop'}>
        <IoIosStar size={20} color='#080808' />
        </span>
      <span className={showStars ? 'star' : 'star stop'}>
        <IoIosStar size={20} color='#080808' />
        </span>
      <span className={showStars ? 'star' : 'star stop'}>
        <IoIosStar size={20} color='#080808' />
        </span>
      <span className={showStars ? 'star' : 'star stop'}>
        <IoIosStar size={20} color='#080808' />
        </span>
      <span className={showStars ? 'star' : 'star stop'}>
        <IoIosStar size={20} color='#080808' />
        </span>
      <span className={showStars ? 'star' : 'star stop'}>
        <IoIosStar size={20} color='#080808' />
        </span>
      <span className={showStars ? 'star' : 'star stop'}>
        <IoIosStar size={20} color='#080808' />
        </span>
      <span className={showStars ? 'star' : 'star stop'}>
        <IoIosStar size={20} color='#080808' />
        </span>
      <span className={showStars ? 'star' : 'star stop'}>
        <IoIosStar size={20} color='#080808' />
        </span>
      <span className={showStars ? 'star' : 'star stop'}>
        <IoIosStar size={20} color='#080808' />
        </span>
    </>
  )
}

export default Stars