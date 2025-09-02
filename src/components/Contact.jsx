import React, { useState } from 'react';
import styles from '../styles/components/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // This function is kept for future functionality
    // The actual form submission is handled by Formspree
    setSubmitted(true);
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
                <p>dulanganikeshala2@gmail.com</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon="phone" />
              <div>
                <h3>Phone</h3>
                <p>+94 76 325 1606</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon="map-marker-alt" />
              <div>
                <h3>Location</h3>
                <p>Moratuwa, Sri Lanka</p>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="https://github.com/Dulanga2002" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
              <a href="https://linkedin.com/in/dulanga-nikeshala-a18220279/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              {/* Add more social media links as needed */}
            </div>
          </div>
          
          {!submitted ? (
            <form 
              className={styles.contactForm} 
              action="https://formspree.io/f/xdoqrjdj"
              method="POST"
              onSubmit={() => setSubmitted(true)}
            >
              <div className={styles.formGroup}>
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              
              <div className={styles.formGroup}>
                <input type="email" name="_replyto" placeholder="Your Email" required />
              </div>
              
              <div className={styles.formGroup}>
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              
              <div className={styles.formGroup}>
                <textarea name="message" placeholder="Your Message" required></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          ) : (
            <div className={`${styles.formGroup} ${styles.success}`}>
              <p className={styles.thankYouMessage}>
                Thank you for your message! I'll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setSubmitted(false)} 
                className={styles.submitButton}
                style={{ marginTop: '20px' }}
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
