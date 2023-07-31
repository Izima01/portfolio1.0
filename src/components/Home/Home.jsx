import Data from "./Data"
import Social from "./Social"
import './Home.css';
import '../../App.css';
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section id="home" className="pt-8 sm:pt-16 px-0 pb-8 section">
        <div className="max-w-[968px] px-8 lg:px-0 mx-auto grid gap-6 gap-y-16 ">
            <div className="grid lg:gap-x-8 gap-x-5 pt-14 md:pt-16 items-center home_content">
                <Social />
                <div className="home_img bg-no-repeat h-52 sm:h-64 lg:h-80 w-52 sm:w-64 lg:w-80 order-[initial] md:order-1 md:justify-self-center" />
                <Data />
            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home