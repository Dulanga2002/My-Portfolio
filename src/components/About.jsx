import React from "react";
import styles from "../styles/components/About.module.css";

const About = () => {
  const downloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/DulangaNikeshala.pdf';
    link.download = 'Dulanga_Nikeshala_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { number: "3+", label: "Years Learning" },
    { number: "5+", label: "Projects Built" },
    { number: "10+", label: "Technologies" },
    { number: "24/7", label: "Learning Mode" }
  ];

  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      description: "BSc (Hons) IT & Management at University of Moratuwa"
    },
    {
      icon: "💻",
      title: "Specialization",
      description: "Full-stack web development with modern technologies"
    },
    {
      icon: "🚀",
      title: "Mission",
      description: "Building innovative solutions that solve real-world problems"
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.tagline}>
            Passionate Software Developer crafting innovative solutions and exploring 
            the frontiers of web development and technology.
          </p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.introSection}>
            <div className={styles.textContent}>
              <h3 className={styles.subtitle}>
                Hello, I'm <span className={styles.nameHighlight}>Dulanga Nikeshala</span>
              </h3>
              <p className={styles.description}>
                I am a dedicated software development student with a strong foundation in 
                modern web technologies and programming principles. Currently pursuing my 
                Bachelor's degree in Information Technology & Management at the University 
                of Moratuwa, I specialize in creating responsive and user-friendly web 
                applications using React.js, JavaScript, and full-stack technologies.
              </p>
              <p className={styles.description}>
                My goal is to build innovative solutions that solve real-world problems 
                while delivering exceptional user experiences. I am constantly learning 
                and expanding my skill set to stay current with the latest industry trends 
                and best practices in software development.
              </p>
            </div>
          </div>

          <div className={styles.highlightsSection}>
            <div className={styles.highlights}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>{highlight.icon}</div>
                  <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                  <p className={styles.highlightDescription}>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.statsSection}>
            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.currentFocusSection}>
            <h4 className={styles.focusTitle}>Current Focus</h4>
            <div className={styles.focusItems}>
              <span className={styles.focusTag}>React Development</span>
              <span className={styles.focusTag}>Full Stack Web Apps</span>
              <span className={styles.focusTag}>UI/UX Design</span>
              <span className={styles.focusTag}>Modern JavaScript</span>
              <span className={styles.focusTag}>Problem Solving</span>
            </div>
            <p className={styles.focusDescription}>
              Currently seeking internship opportunities and open to collaborative projects 
              in web development, full-stack development, and innovative tech solutions.
            </p>
          </div>
          
          <div className={styles.actionSection}>
            <div className={styles.buttons}>
              <a href="#contact" className={styles.primaryButton}>
                Let's Connect
              </a>
              <button
                onClick={downloadCV}
                className={styles.secondaryButton}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
