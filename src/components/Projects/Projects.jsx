import { projectsData } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <section id="projects" className="work section">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent projects</span>
        <div className="work__container cont flex flex-col gap-8">
          {projectsData.map(({title, id, image, stack, description, live, github }) => (
            <ProjectItems key={id} image={image} title={title} stack={stack} live={live} github={github} description={description} id={id} />
          ))}
        </div>
    </section>
  )
}

export default Projects