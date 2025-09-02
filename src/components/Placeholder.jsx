import React from 'react';
import styles from '../styles/components/Placeholder.module.css';

const Placeholder = ({ text = 'Image' }) => {
  return (
    <div className={styles.placeholder}>
      {text}
    </div>
  );
};

export default Placeholder;
