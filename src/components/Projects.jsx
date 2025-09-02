import React from 'react';
import styles from '../styles/components/Projects.module.css';
import Placeholder from './Placeholder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "My Portfolio",
      description: "Personal portfolio website built with React.js showcasing my skills, projects, and experience.",
      technologies: ["React.js", "CSS Modules", "Responsive Design"],
      image: null, // We'll use a placeholder
      liveLink: "#",
      githubLink: "https://github.com/Dulanga2002/My-Portfolio",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A sample project description. Replace with your actual project details.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: null, // We'll use a placeholder
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description: "A sample project description. Replace with your actual project details.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: null, // We'll use a placeholder
      liveLink: "#",
      githubLink: "#",
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <Placeholder text={project.title} />
                )}
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      <FontAwesomeIcon icon={['fab', 'github']} /> Code
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      <FontAwesomeIcon icon="external-link-alt" /> Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
