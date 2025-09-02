import React from 'react';
import styles from '../styles/components/Skills.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faServer, faDatabase, 
  faTools, faPalette, faLaptopCode 
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  // Define your skills with categories
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: faCode,
      description: "Creating responsive and interactive user interfaces",
      skills: [
        { name: "HTML5", proficiency: 90, icon: "html5" },
        { name: "CSS3", proficiency: 85, icon: "css3-alt" },
        { name: "JavaScript", proficiency: 85, icon: "js" },
        { name: "React.js", proficiency: 80, icon: "react" },
        { name: "Tailwind CSS", proficiency: 75, icon: "css3" },
      ]
    },
    {
      category: "Backend Development",
      icon: faServer,
      description: "Building robust server-side applications",
      skills: [
        { name: "Node.js", proficiency: 75, icon: "node-js" },
        { name: "Express.js", proficiency: 70, icon: "node" },
        { name: "Laravel (PHP)", proficiency: 75, icon: "laravel" },
        { name: "RESTful APIs", proficiency: 80, icon: "code" },
      ]
    },
    {
      category: "Database",
      icon: faDatabase,
      description: "Managing and optimizing data storage",
      skills: [
        { name: "MongoDB", proficiency: 75, icon: "database" },
        { name: "MySQL", proficiency: 70, icon: "database" },
      ]
    },
    {
      category: "Design",
      icon: faPalette,
      description: "Creating intuitive and appealing user experiences",
      skills: [
        { name: "Figma", proficiency: 80, icon: "figma" },
        { name: "UI/UX Design", proficiency: 75, icon: "pencil-ruler" },
        { name: "Responsive Design", proficiency: 85, icon: "mobile-alt" },
      ]
    },
    {
      category: "Tools & Others",
      icon: faTools,
      description: "Using industry-standard tools for efficient development",
      skills: [
        { name: "Git", proficiency: 80, icon: "git-alt" },
        { name: "GitHub", proficiency: 85, icon: "github" },
        { name: "VS Code", proficiency: 90, icon: "code" },
        { name: "Arduino", proficiency: 65, icon: "microchip" },
        { name: "C++", proficiency: 60, icon: "file-code" },
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Skills</h2>
        <p className={styles.subtitle}>
          A comprehensive overview of my technical expertise and proficiencies
        </p>
        
        <div className={styles.skillsContainer}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <div className={styles.categoryHeader}>
                <FontAwesomeIcon icon={category.icon} className={styles.categoryIcon} />
                <h3>{category.category}</h3>
              </div>
              <p className={styles.categoryDescription}>{category.description}</p>
              
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <div className={styles.skillNameWrapper}>
                        <FontAwesomeIcon 
                          icon={['fab', skill.icon]} 
                          className={styles.skillIcon} 
                          fallback={<FontAwesomeIcon icon={skill.icon} />} 
                        />
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                      <div className={styles.skillLevel}>
                        {skill.proficiency >= 85 ? (
                          <span className={`${styles.levelBadge} ${styles.expert}`}>Expert</span>
                        ) : skill.proficiency >= 70 ? (
                          <span className={`${styles.levelBadge} ${styles.advanced}`}>Advanced</span>
                        ) : skill.proficiency >= 50 ? (
                          <span className={`${styles.levelBadge} ${styles.intermediate}`}>Intermediate</span>
                        ) : (
                          <span className={`${styles.levelBadge} ${styles.beginner}`}>Beginner</span>
                        )}
                      </div>
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
