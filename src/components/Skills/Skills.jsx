import Frontend from "./Frontend";
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills section cont">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Technical Skills</span>

        <div className="skills__container grid items-center">
            <Frontend />
        </div>
    </section>
  )
}

export default Skills