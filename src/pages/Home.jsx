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
            <h1>Dulanga Nikeshala</h1>
            <h2>Software Developer</h2>
            <p>Creating beautiful and functional web experiences</p>
            <div className={styles.cta}>
              <a href="#projects" className={styles.primaryButton}>View My Work</a>
              <a href="#contact" className={styles.secondaryButton}>Contact Me</a>
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
