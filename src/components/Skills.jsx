import React from 'react';
import styles from '../styles/components/Skills.module.css';

const Skills = () => {
  // Define your skills with categories
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", proficiency: 90 },
        { name: "CSS3", proficiency: 85 },
        { name: "JavaScript", proficiency: 85 },
        { name: "React.js", proficiency: 80 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", proficiency: 75 },
        { name: "Express.js", proficiency: 70 },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", proficiency: 80 },
        { name: "VS Code", proficiency: 90 },
        { name: "Responsive Design", proficiency: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Skills</h2>
        
        <div className={styles.skillsContainer}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3>{category.category}</h3>
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercentage}>{skill.proficiency}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progress}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
