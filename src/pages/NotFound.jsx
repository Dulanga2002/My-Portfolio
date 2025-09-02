import React from 'react';
import styles from '../styles/pages/NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className={styles.button}>Go Back Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
