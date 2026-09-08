import { useState } from "react";
import {FaArrowLeft,FaArrowRight} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      percentage: 99
    },
    {
      name: "CSS3",
      percentage: 95
    },
    {
      name: "JavaScript",
      percentage: 92
    },
    {
      name: "Bootstrap",
      percentage: 87
    },
    {
      name: "React Development",
      percentage: 85
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSkills = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % skills.length
    );
  };

  const previousSkills = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + skills.length) %
        skills.length
    );
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-box">
        <h2>Skills</h2>
        <p className="skills-subtitle">You Can See My Skills Here Yasta</p>
        <div className="skills-carousel">
          <button className="skill-arrow left" onClick={previousSkills}><FaArrowLeft /></button>
          <div className="skills-stage">
            {skills.map((skill, index) => {
              const position =(index - currentIndex + skills.length) % skills.length;
              return (
                <div className={`skill-item position-${position}`}
                  key={skill.name}>
                  <div className="skill-circle"
                    style={{
                      "--percentage":`${skill.percentage * 3.6}deg`
                    }}>
                    <span>{skill.percentage}%</span>
                  </div>
                  <h3>{skill.name}</h3>
                </div>
              );
            })}

          </div>
          <button className="skill-arrow right" onClick={nextSkills}><FaArrowRight /></button>
        </div>
      </div>

    </section>
  );
}

export default Skills;