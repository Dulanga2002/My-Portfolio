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
<<<<<<< HEAD
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
=======
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
>>>>>>> be1e16fb6105a3f8311ab8f20008c008a2f94eab
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
<<<<<<< HEAD
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
=======
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
>>>>>>> be1e16fb6105a3f8311ab8f20008c008a2f94eab
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
