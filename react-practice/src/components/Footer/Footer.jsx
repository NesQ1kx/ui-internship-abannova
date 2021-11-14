import React from 'react';
import classNames from "classnames";

import styles from './Footer.module.scss';
import Logo from "../Logo/Logo";
import { ReactComponent as TwitterSvg } from '../../images/twitter_icon.svg';
import { ReactComponent as InstagramSvg } from '../../images/inst_icon.svg';
import { ReactComponent as FacebookSvg } from '../../images/facebook_icon.svg';

const Footer = ({dark = true}) => {
  return (
    <div className={classNames({[styles.footer]: true, [styles.footer_dark]: dark})}>
      <div className={styles.links}>
        <Logo big={false} dark={!dark} />
        <a href="#" className={classNames({[styles.link]: true, [styles.link_dark]: !dark})}>DESIGN GALLERY</a>
        <a href="#" className={classNames({[styles.link]: true, [styles.link_dark]: !dark})}>PRODUCTS</a>
        <a href="#" className={classNames({[styles.link]: true, [styles.link_dark]: !dark})}>RESOURCES</a>
        <a href="#" className={classNames({[styles.link]: true, [styles.link_dark]: !dark})}>ABOUT</a>
        <a href="#" className={classNames({[styles.link]: true, [styles.link_dark]: !dark})}>CONTACT</a>
      </div>
      <div className={styles.social_networks}>
        <a href="#" className={classNames({[styles.social_network]: true, [styles.social_network_dark]: !dark})}>
          <TwitterSvg />
        </a>
        <a href="#" className={classNames({[styles.social_network]: true, [styles.social_network_dark]: !dark})}>
          <InstagramSvg />
        </a>
        <a href="#" className={classNames({[styles.social_network]: true, [styles.social_network_dark]: !dark})}>
          <FacebookSvg />
        </a>
      </div>
    </div>
  );
};

export default Footer;
