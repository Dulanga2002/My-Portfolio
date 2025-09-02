import React from 'react';
import styles from '../styles/components/About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            {/* Placeholder for your profile image */}
            <div className={styles.profileImage}></div>
          </div>
          <div className={styles.textContent}>
            <h3>Hello, I'm Dulanga Nikeshala</h3>
            <p>
              I am a passionate software developer with experience in web development 
              and a strong foundation in programming principles. I specialize in creating 
              responsive and user-friendly web applications using modern technologies 
              like React.js, JavaScript, and other web frameworks.
            </p>
            <p>
              My goal is to build innovative solutions that solve real-world problems 
              while delivering exceptional user experiences. I am constantly learning 
              and expanding my skill set to stay current with the latest industry trends.
            </p>
            <div className={styles.buttons}>
              <a href="#contact" className={styles.primaryButton}>Contact Me</a>
              <a href="/src/assets/cv/DulangaNikeshala.pdf" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
