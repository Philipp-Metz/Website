import { useState, useRef } from "react";
import experienceData from "../data/experienceData.js";
import "../styles/ExperienceList.css";

function ExperienceList() {
  const [activeId, setActiveId] = useState(experienceData[0]?.id ?? 1);
  const tabRefs = useRef([]);

  const activeExperience = experienceData.find(
    (experience) => experience.id === activeId,
  );

  const handleKeyDown = (event, index) => {
    const count = experienceData.length;
    let nextIndex = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % count;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + count) % count;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = count - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      const nextItem = experienceData[nextIndex];
      setActiveId(nextItem.id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className="experience-list">
      <div
        className="experience-tabs"
        role="tablist"
        aria-label="Work experience"
      >
        {experienceData.map((experience, index) => {
          const isSelected = experience.id === activeId;
          return (
            <button
              key={experience.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={`experience-tab-${experience.id}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`experience-panel-${experience.id}`}
              tabIndex={isSelected ? 0 : -1}
              className={`experience-tab ${isSelected ? "active" : ""}`}
              onClick={() => setActiveId(experience.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              <span className="experience-tab-position">
                {experience.position}
              </span>
              <span className="experience-tab-company">
                {experience.company}
              </span>
            </button>
          );
        })}
      </div>

      {activeExperience && (
        <div
          id={`experience-panel-${activeExperience.id}`}
          className="experience-panel"
          role="tabpanel"
          aria-labelledby={`experience-tab-${activeExperience.id}`}
          tabIndex={0}
        >
          <h3 className="experience-role">
            {activeExperience.position} @{" "}
            <span className="experience-company">
              {activeExperience.company}
            </span>
          </h3>
          <p className="experience-duration">
            {activeExperience.startDate} - {activeExperience.endDate}
          </p>
          <ul className="experience-points">
            {activeExperience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExperienceList;
