import { useState } from "react";
import './Skills.css';
import SkillsList, { backend, frontend } from "./SkillsList";

const Skills = () => {
  const [skill, setSkill] = useState('frontend');

  return (
    <section id="skills" className="skills section cont">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Technical Skills</span>
        <div role="tablist" className="tabs tabs-lifted">
          <input type="radio" name="frontend" role="tab" className="tab" aria-label="Frontend" onChange={(e) => setSkill(e.target.name)} checked={skill == 'frontend'} />
          <div role="tabpanel" className="tab-content p-10">
            <div className="skills__container grid items-center">
              <SkillsList data={frontend} />
            </div>
          </div>

          <input type="radio" name="backend" role="tab" className="tab" aria-label="Backend" onChange={(e) => setSkill(e.target.name)} checked={skill=='backend'}  />
          <div role="tabpanel" className="tab-content  p-10">
            <div className="skills__container grid items-center">
              <SkillsList data={backend} />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills