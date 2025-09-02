import React from 'react';
import styles from '../styles/components/Projects.module.css';
import Placeholder from './Placeholder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Visitor Management System",
      description: "Developed a web-based Visitor Management System as part of a 5-member team for the University of Moratuwa. The system manages visitor appointments, check-ins, and access control using role-based access, improving efficiency and security.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "MERN Stack"],
      image: null, // Add your project image
      liveLink: "#", // Add your live demo link if available
      githubLink: "#", // Add your GitHub repository link
      role: "Full Stack Developer",
      duration: "2024-2025",
      client: "University of Moratuwa",
      team: "5-member team",
      mentor: "Zillione Technology"
    },
    {
      id: 2,
      title: "BizRates Mobile App",
      description: "Developed the BizRates mobile app under Sysco LABS guidance. The app helps users discover top-rated businesses through verified reviews, leaderboards, and smart recommendations. Features include direct messaging, reward-based feedback, and community forums.",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      image: null, // Add your project image
      liveLink: "#", // Add your live demo link if available
      githubLink: "#", // Add your GitHub repository link
      role: "UI/UX Designer",
      duration: "2024",
      client: "Sysco LABS",
      contribution: "Designed user interfaces and conducted usability testing"
    },
    {
      id: 3,
      title: "Movie Hub",
      description: "Built a full-stack Movie Management System using Laravel and React. The app enables users to browse movies, save favorites, and log in with role-based access. Admins can add, edit, delete, and organize movies by category.",
      technologies: ["React.js", "Tailwind CSS", "Laravel", "PHP"],
      image: null, // Add your project image
      liveLink: "#", // Add your live demo link if available
      githubLink: "#", // Add your GitHub repository link
      role: "Full Stack Developer",
      duration: "2024",
      type: "Individual Project"
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
                {project.duration && <p className={styles.projectDuration}>{project.duration}</p>}
                {project.client && <p className={styles.projectMeta}><strong>Client:</strong> {project.client}</p>}
                {project.role && <p className={styles.projectMeta}><strong>Role:</strong> {project.role}</p>}
                {project.team && <p className={styles.projectMeta}><strong>Team:</strong> {project.team}</p>}
                {project.mentor && <p className={styles.projectMeta}><strong>Mentor:</strong> {project.mentor}</p>}
                {project.type && <p className={styles.projectMeta}><strong>Project Type:</strong> {project.type}</p>}
                <p className={styles.projectDescription}>{project.description}</p>
                {project.contribution && (
                  <p className={styles.projectContribution}>
                    <strong>Contribution:</strong> {project.contribution}
                  </p>
                )}
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
