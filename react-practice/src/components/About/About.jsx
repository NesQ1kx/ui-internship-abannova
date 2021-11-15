import React from 'react';

import src from '../../images/AboutImg.png';
import styles from './About.module.scss';
import Button, {buttonColors as ButtonColor} from "../Button/Button";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={styles.title}>WHO WE ARE</div>
        <div className={styles.intro}>Best Way is about endurance: products that last, styles that last, and as a family-owned and operated business since 1965</div>
        <div className={styles.description}>Best Way Stone Limited provides a transferable lifetime guarantee on the structural integrity of it's Interlocking Paving Stone products for residential use. All Best Way Stone® products are manufactured to meet and exceed their respective North American standards set forth by both the CSA and ASTM. This guarantee provides assurances to the individual who has chosen Best Way Stone® as their source for Interlocking Paving Stones.</div>
        <Button backgroundColor={ButtonColor.transparent_green}>Read More</Button>
      </div>
      <img src={src} alt="img"/>
    </div>
  );
};

export default About;
