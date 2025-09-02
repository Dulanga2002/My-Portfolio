import React, { useState } from 'react';
import styles from '../styles/components/Header.module.css';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/src/assets/images/profile.png" alt="Dulanga Nikeshala" className={styles.logoImage} />
        <h2>Dulanga Nikeshala</h2>
      </div>
      
      <div className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <li><Link to="home" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
