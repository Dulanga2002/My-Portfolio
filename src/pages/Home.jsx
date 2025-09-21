import React from 'react';
import styles from '../styles/pages/Home.module.css';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      
      <main>
        <section id="home" className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.roleTag}>Software Developer</div>
              <h1 className={styles.heroTitle}>
                Hi, I'm <span className={styles.nameHighlight}>Dulanga Nikeshala</span>
              </h1>
              <p className={styles.heroSubtitle}>
                3rd-year BSc (Hons) IT & Management student from University of Moratuwa
              </p>
              <p className={styles.heroDescription}>
                I build modern web applications and software solutions using React, JavaScript, 
                and full-stack technologies. I enjoy solving real-world problems by combining 
                clean code, innovative design, and user-centered development.
              </p>
              <div className={styles.heroButtons}>
                <a href="#projects" className={styles.primaryButton}>
                  View Projects
                </a>
                <a href="#contact" className={styles.secondaryButton}>
                  Get In Touch
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img 
                src="/src/assets/images/profile.png" 
                alt="Dulanga Nikeshala" 
                className={styles.profileImage}
              />
            </div>
          </div>
        </section>
        
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
