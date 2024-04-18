/* eslint-disable react/no-unknown-property */
import Data from "./Data"
import Social from "./Social"
import './Home.css';
import '../../App.css';
import ScrollDown from "./ScrollDown";
import imgaa from '../../assets/about.webp'

const Home = () => {
  return (
    <section id="home" className="pt-8 sm:pt-16 px-0 pb-8 section overflow-x-hidden">
        <div className="max-w-[968px] px-8 lg:px-0 mx-auto grid gap-6 gap-y-16 ">
            <div className="grid lg:gap-x-8 gap-x-5 pt-6 sm:pt-14 md:pt-16 items-center home_content">
                <Social />
                <img src={imgaa} alt="" fetchpriority="high" className="rounded-2xl order-[initial] md:order-1" width={480} height={420} />
                <Data />
            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home