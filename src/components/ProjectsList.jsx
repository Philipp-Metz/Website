import { useState, useRef } from "react";
import "../styles/ProjectsList.css";
import projectsData from "../data/projectsData.js";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

function ProjectsList() {
  const [activeId, setActiveId] = useState(projectsData[0]?.id ?? 1);
  const tabRefs = useRef([]);

  const activeProject = projectsData.find((project) => project.id === activeId);

  const handleKeyDown = (event, index) => {
    const count = projectsData.length;
    let nextIndex = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % count;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + count) % count;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = count - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      const nextProject = projectsData[nextIndex];
      setActiveId(nextProject.id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className="projects-list">
      <div className="projects-tabs" role="tablist" aria-label="Projects">
        {projectsData.map((project, index) => {
          const isSelected = project.id === activeId;
          return (
            <button
              key={project.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={`project-tab-${project.id}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`project-panel-${project.id}`}
              tabIndex={isSelected ? 0 : -1}
              className={`projects-tab ${isSelected ? "active" : ""}`}
              onClick={() => setActiveId(project.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {project.name}
            </button>
          );
        })}
      </div>

      {activeProject && (
        <div
          id={`project-panel-${activeProject.id}`}
          className="projects-panel"
          role="tabpanel"
          aria-labelledby={`project-tab-${activeProject.id}`}
          tabIndex={0}
        >
          <div className="projects-header">
            <h3 className="projects-name">{activeProject.name}</h3>
            <ul className="projects-icons">
              {activeProject.github && (
                <li>
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open GitHub repository"
                    aria-label={`${activeProject.name} GitHub repository`}
                  >
                    <BsGithub size={20} />
                  </a>
                </li>
              )}
              {activeProject.link && (
                <li>
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open live website"
                    aria-label={`${activeProject.name} live website`}
                  >
                    <BsLink45Deg size={21} />
                  </a>
                </li>
              )}
            </ul>
          </div>
          <p className="projects-description">{activeProject.description}</p>
          <h4 className="projects-tech-title">Technologies used:</h4>
          <ul className="projects-technologies">
            {activeProject.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProjectsList;
