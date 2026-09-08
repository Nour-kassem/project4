import { useState } from "react";
import travelImage from '../photos/travel1.jpg';
import travelerImage from '../photos/travel2.jpg';
import together from '../photos/together.jpg';
import togetherr from '../photos/togetherr.jpg';
import boost from '../photos/boost.jpg';
import booster from '../photos/booster.jpg';
function Projects() {
  const [activeSection, setActiveSection] = useState(0);

  const projects = [
    {
      id: 1,
      image: travelImage,
      title: "Travel The World",
      description: "Travel Website"
    },
    {
      id: 2,
      image: together,
      title: "Let's Do It Together",
      description: "Landing Page"
    },
    {
      id: 3,
      image: boost,
      title: "Boost Your Startup",
      description: "Business Website"
    },
    {
      id: 4,
      image: travelerImage,
      title: "Travel The World",
      description: "Travel Website"
    },
    {
      id: 5,
      image: togetherr,
      title: "Let's Do It Together",
      description: "Landing Page"
    },
    {
      id: 6,
      image: booster,
      title: "Boost Your Startup",
      description: "Business Website"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2>My Project</h2>

        <p className="projects-description">
          My name is Nour, this is my project in React Dev.
        </p>

        <div className="project-tabs">
          <button
            className={activeSection === 0 ? "active" : ""}
            onClick={() => setActiveSection(0)}
          >
            1st Section
          </button>

          <button
            className={activeSection === 1 ? "active" : ""}
            onClick={() => setActiveSection(1)}
          >
            2nd Section
          </button>

          <button
            className={activeSection === 2 ? "active" : ""}
            onClick={() => setActiveSection(2)}
          >
            3rd Section
          </button>
        </div>

        {activeSection === 0 && (
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>

                <img src={project.image} alt={project.title}/>

                <div className="project-overlay">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <button>View Project</button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;
