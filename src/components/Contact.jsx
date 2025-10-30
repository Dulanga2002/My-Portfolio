import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from '../styles/components/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Basic client-side validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      // Use Vite environment variables for production/dev safety.
      // Create a file named `.env` (not committed) with these values:
      // VITE_EMAILJS_SERVICE_ID=your_service_id
      // VITE_EMAILJS_TEMPLATE_ID=your_template_id
      // VITE_EMAILJS_PUBLIC_KEY=your_public_key
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      // If publicKey is provided, init the sdk (recommended)
      if (publicKey) {
        try {
          emailjs.init(publicKey);
        } catch (initErr) {
          console.warn('EmailJS init warning:', initErr);
        }
      }

      // Try EmailJS first
      try {
        await emailjs.send(serviceID, templateID, templateParams);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (emailjsError) {
        console.error('EmailJS send failed:', emailjsError);
        // Fallback to mailto
        const to = import.meta.env.VITE_CONTACT_TO_EMAIL || 'dulanganikeshala2@gmail.com';
        const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      const to = import.meta.env.VITE_CONTACT_TO_EMAIL || 'dulanganikeshala2@gmail.com';
      const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section 
      id="contact" 
      className={styles.contact}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>
        
        <motion.div 
          className={styles.contactContent}
          variants={containerVariants}
        >
          <motion.div 
            className={styles.contactInfo}
            variants={itemVariants}
          >
            <motion.div 
              className={styles.contactItem}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                x: 10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <FontAwesomeIcon icon="envelope" />
              </motion.div>
              <div>
                <h3>Email</h3>
                <p>dulanganikeshala2@gmail.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.contactItem}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                x: 10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 4
                }}
              >
                <FontAwesomeIcon icon="phone" />
              </motion.div>
              <div>
                <h3>Phone</h3>
                <p>+94 76 325 1606</p>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.contactItem}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                x: 10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                animate={{ 
                  y: [0, -5, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <FontAwesomeIcon icon="map-marker-alt" />
              </motion.div>
              <div>
                <h3>Location</h3>
                <p>Moratuwa, Sri Lanka</p>
              </div>
            </motion.div>
            
            <motion.div 
              className={styles.socialLinks}
              variants={containerVariants}
            >
              <motion.a 
                href="https://github.com/Dulanga2002" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={['fab', 'github']} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/dulanga-nikeshala-a18220279/" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.2,
                  rotate: -360,
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {!submitted ? (
            <motion.form 
              className={styles.contactForm} 
              onSubmit={handleSubmit}
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className={styles.formGroup}
                variants={fieldVariants}
              >
                <motion.input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: '#3b82f6',
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }}
                  animate={{
                    borderColor: focusedField === 'name' ? '#3b82f6' : '#e5e7eb'
                  }}
                />
              </motion.div>
              
              <motion.div 
                className={styles.formGroup}
                variants={fieldVariants}
              >
                <motion.input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: '#3b82f6',
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }}
                  animate={{
                    borderColor: focusedField === 'email' ? '#3b82f6' : '#e5e7eb'
                  }}
                />
              </motion.div>
              
              <motion.div 
                className={styles.formGroup}
                variants={fieldVariants}
              >
                <motion.input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: '#3b82f6',
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }}
                  animate={{
                    borderColor: focusedField === 'subject' ? '#3b82f6' : '#e5e7eb'
                  }}
                />
              </motion.div>
              
              <motion.div 
                className={styles.formGroup}
                variants={fieldVariants}
              >
                <motion.textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: '#3b82f6',
                    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }}
                  animate={{
                    borderColor: focusedField === 'message' ? '#3b82f6' : '#e5e7eb'
                  }}
                />
              </motion.div>
              
              <motion.button 
                type="submit" 
                className={styles.submitButton}
                disabled={isLoading}
                variants={fieldVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
                animate={{
                  boxShadow: isLoading 
                    ? '0 0 20px rgba(59, 130, 246, 0.5)' 
                    : '0 10px 25px rgba(59, 130, 246, 0.4)'
                }}
              >
                <motion.span
                  animate={{
                    opacity: isLoading ? [1, 0.5, 1] : 1
                  }}
                  transition={{
                    duration: 1,
                    repeat: isLoading ? Infinity : 0
                  }}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </motion.span>
              </motion.button>
            </motion.form>
          ) : (
            <motion.div 
              className={`${styles.formGroup} ${styles.success}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p 
                className={styles.thankYouMessage}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Thank you for your message! I'll get back to you as soon as possible.
              </motion.p>
              <motion.button 
                onClick={() => setSubmitted(false)} 
                className={styles.submitButton}
                style={{ marginTop: '20px' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Send Another Message
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
