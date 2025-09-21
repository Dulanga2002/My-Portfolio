import React from 'react';import React from 'react';import React from 'react';

import styles from '../styles/components/CVDownload.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';import styles from '../styles/components/CVDownload.module.css';import styles from '../styles/components/CVDownload.module.css';



const CVDownload = () => {import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  return (

    <div className={styles.cvDownload}>

      <a 

        href="/DulangaNikeshala.pdf" const CVDownload = () => {const CVDownload = () => {

        download="Dulanga_Nikeshala_CV.pdf"

        className={styles.downloadButton}  return (  return (

        target="_blank"

        rel="noopener noreferrer"    <div className={styles.cvDownload}>    <div className={styles.cvDownload}>

      >

        <FontAwesomeIcon icon="download" /> Download CV      <a       <a 

      </a>

    </div>        href="/DulangaNikeshala.pdf"         href="/DulangaNikeshala.pdf" 

  );

};        download="Dulanga_Nikeshala_CV.pdf"        download="Dulanga_Nikeshala_CV.pdf"



export default CVDownload;        className={styles.downloadButton}        className={styles.downloadButton}

        target="_blank"        target="_blank"

        rel="noopener noreferrer"        rel="noopener noreferrer"

      >      >

        <FontAwesomeIcon icon="download" /> Download CV        <FontAwesomeIcon icon="download" /> Download CV

      </a>      </a>

    </div>    </div>

  );  );

};};



export default CVDownload;export default CVDownload;oad = () => {
  return (
    <div className={styles.cvDownload}>
      <a 
        href="/DulangaNikeshala.pdf" 
        download="Dulanga_Nikeshala_CV.pdf"
        className={styles.downloadButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon="download" /> Download CV
      </a>
    </div>
  );
};act';
import styles from '../styles/components/CVDownload.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CVDownload = () => {
  const handleDownload = () => {
    window.open('/DulangaNikeshala.pdf', '_blank');
  };

  return (
    <div className={styles.cvDownload}>
      <button 
        className={styles.downloadButton}
        onClick={handleDownload}
        style={{ border: 'none', cursor: 'pointer' }}
      >
        <FontAwesomeIcon icon="download" /> Download CV
      </button>
    </div>
  );
};

export default CVDownload;
