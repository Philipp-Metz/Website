import "../styles/Projects.css";
import ProjectsList from "./ProjectsList";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 id="projects-title" className="section-title">
        .\ projects
      </h2>
      <ProjectsList />
    </section>
  );
}

export default Projects;
