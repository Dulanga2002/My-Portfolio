import React from 'react';
import styles from '../styles/components/Projects.module.css';
import Placeholder from './Placeholder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Visitor Management System",
      description: "Developed a comprehensive web-based system for managing visitor appointments, check-ins, and access control with role-based permissions.",
      challenge: "Create an efficient system to manage visitor flow and security at University of Moratuwa while maintaining user-friendly experience.",
      role: "Full Stack Developer",
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js",],
      image: null,
      liveLink: "#",
      githubLink: "#",
      duration: "2024-2025",
      client: "University of Moratuwa",
      team: "5-member team",
      mentor: "Zillione Technology",
      year: "2024",
      techCount: 5
    },
    {
      id: 2,
      title: "BizRates Mobile App",
      description: "Designed and developed a mobile application for discovering top-rated businesses through verified reviews and smart recommendations.",
      challenge: "Create an intuitive mobile experience that helps users find reliable businesses through community-driven reviews and ratings.",
      role: "UI/UX Designer & Frontend Developer",
      technologies: ["Figma", , "UI/UX Design", "Prototyping"],
      image: null,
      liveLink: "#",
      githubLink: "#",
      duration: "2024",
      client: "Sysco LABS",
      year: "2024",
      techCount: 4
    },
    {
      id: 3,
      title: "Movie Hub",
      description: "Built a full-stack movie management platform with user authentication, favorites system, and comprehensive admin panel for content management.",
      challenge: "Develop a scalable movie database system with smooth user experience and efficient admin controls.",
      role: "Full Stack Developer",
      technologies: ["React.js", "Tailwind CSS", "Laravel", "PHP", "MySQL"],
      image: null,
      liveLink: "#",
      githubLink: "#",
      duration: "2024",
      type: "Individual Project",
      year: "2024",
      techCount: 5
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Projects & Experience</h2>
          <p className={styles.subtitle}>
            Here are some of the projects I've built that showcase my skills in 
            full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={styles.projectMeta}>
                  <span className={styles.year}>{project.year}</span>
                  <span className={styles.techCount}>{project.techCount} techs</span>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectSections}>
                  <div className={styles.challengeSection}>
                    <h4>Challenge</h4>
                    <p>{project.challenge}</p>
                  </div>
                  
                  <div className={styles.roleSection}>
                    <h4>My Role</h4>
                    <p>{project.role}</p>
                  </div>
                </div>
                
                <div className={styles.technologiesSection}>
                  <h4>Technologies</h4>
                  <div className={styles.techTags}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.projectLinks}>
                  {project.githubLink !== "#" && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      GitHub
                    </a>
                  )}
                  {project.liveLink !== "#" && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.callToAction}>
          <p>Want to see more of my work?</p>
          <a href="#contact" className={styles.collaborateButton}>Let's Collaborate</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
