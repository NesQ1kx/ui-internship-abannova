import React from 'react';

import styles from './Feedback.module.scss';
import Button, {buttonColors} from "../Button/Button";

const Feedback = () => {
  return (
    <div className={styles.feedback}>
      <div>
        <div className={styles.contacts_title}>CONTACTS</div>
        <div className={styles.contacts_label}>Get in Touch</div>
        <div className={styles.email}>info@mail.com</div>
        <div className={styles.address}>8821 Weston Rd. Woodbridge, ON L4L 0K9</div>
      </div>
      <form className={styles.form}>
        <input type="email" placeholder="Email" className={styles.field} />
        <input type="text" placeholder="Name" className={styles.field} />
        <textarea placeholder="Message" className={`${styles.field} ${styles.textarea}`} />
        <Button backgroundColor={buttonColors.white}>Submit</Button>
      </form>
    </div>
  );
};

export default Feedback;
