import React from 'react';
import styles from '../styles/components/CVDownload.module.css';
import CVFile from '../assets/cv/DulangaNikeshala.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CVDownload = () => {
  return (
    <div className={styles.cvDownload}>
      <a 
        href={CVFile} 
        download="Dulanga_Nikeshala_CV.pdf"
        className={styles.downloadButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon="download" /> Download CV
      </a>
    </div>
  );
};

export default CVDownload;
