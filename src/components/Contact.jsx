import React from 'react';
import styles from '../styles/components/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For now, just a placeholder
    alert('Thank you for your message! This feature will be implemented soon.');
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Me</h2>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon="envelope" />
              <div>
                <h3>Email</h3>
                <p>your.email@example.com</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon="phone" />
              <div>
                <h3>Phone</h3>
                <p>+94 XX XXX XXXX</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon="map-marker-alt" />
              <div>
                <h3>Location</h3>
                <p>Sri Lanka</p>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="https://github.com/Dulanga2002" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              {/* Add more social media links as needed */}
            </div>
          </div>
          
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input type="text" name="name" id="name" placeholder="Your Name" required />
            </div>
            
            <div className={styles.formGroup}>
              <input type="email" name="email" id="email" placeholder="Your Email" required />
            </div>
            
            <div className={styles.formGroup}>
              <input type="text" name="subject" id="subject" placeholder="Subject" required />
            </div>
            
            <div className={styles.formGroup}>
              <textarea name="message" id="message" placeholder="Your Message" required></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
