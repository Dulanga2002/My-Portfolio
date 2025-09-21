import React from 'react';
import styles from '../styles/components/Skills.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faServer, faDatabase, 
  faTools, faPalette, faLaptopCode 
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  // Education data
  const education = [
    {
      institution: "University of Moratuwa",
      degree: "B.Sc. (Hons) in Information Technology & Management",
      period: "2023–2027 (Expected)",
      type: "UOM"
    },
    {
      institution: "Mahanama College",
      degree: "Advanced Level",
      period: "2018-2021",
      type: "A/L"
    }
  ];

  // Skills organized by category like the example
  const skillCategories = [
    {
      category: "Frontend",
      count: 4,
      skills: ["React", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend", 
      count: 3,
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      category: "Languages",
      count: 4,
      skills: ["JavaScript", "Python", "Java", "C++"]
    },
    {
      category: "Tools",
      count: 3,
      skills: ["Git", "VS Code", "Figma"]
    },
    {
      category: "Databases",
      count: 2,
      skills: ["MySQL", "MongoDB"]
    },
    {
      category: "Cloud",
      count: 2,
      skills: ["Firebase", "Vercel"]
    }
  ];

  // Achievements and activities
  const achievements = [
    {
      type: "Certifications",
      title: "Full Stack Web Development",
      description: "Completed comprehensive web development course"
    },
    {
      type: "Activities",
      title: "Tech Club Member",
      description: "Active participant in university tech society"
    },
    {
      type: "Current Focus",
      title: "React Development",
      description: "Building modern web applications"
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Education</h2>
        
        {/* Education Section */}
        <div className={styles.educationSection}>
          <h3 className={styles.sectionTitle}>Education</h3>
          <div className={styles.educationGrid}>
            {education.map((edu, index) => (
              <div key={index} className={styles.educationCard}>
                <div className={styles.educationType}>{edu.type}</div>
                <h4 className={styles.degree}>{edu.degree}</h4>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.period}>{edu.period}</p>
                {edu.gpa && <p className={styles.gpa}>CGPA: {edu.gpa}</p>}
                {edu.results && <p className={styles.results}>{edu.results}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Technical Skills</h3>
          <div className={styles.skillsGrid}>
            {skillCategories.map((category, index) => (
              <div key={index} className={styles.skillCategory}>
                <h4 className={styles.categoryTitle}>
                  <span className={styles.categoryIcon}>{category.count}</span>
                  {category.category}
                </h4>
                <div className={styles.skillTags}>
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className={styles.achievementsSection}>
          <h3 className={styles.sectionTitle}>Achievements & Activities</h3>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.achievementIcon}>🏆</div>
                <h4 className={styles.achievementType}>{achievement.type}</h4>
                <h5 className={styles.achievementTitle}>{achievement.title}</h5>
                <p className={styles.achievementDescription}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
