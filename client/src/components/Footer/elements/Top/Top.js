import React from 'react';
import styles from './Top.sass';
import { FaFacebook, FaInstagram, FaTwitter, FaPaypal, FaCcVisa, FaCcMastercard } from 'react-icons/fa';

const Top = () => (
    <section className={styles.top}>
        <ul className={styles.icons}>
            <li className={`${styles.icon} ${styles.fb}`}><FaFacebook /></li>
            <li className={`${styles.icon} ${styles.ig}`}><FaInstagram /></li>
            <li className={`${styles.icon} ${styles.tt}`}><FaTwitter /></li>
        </ul>
        <img src="/logo.png" alt="logo" className={styles.logo}/>
        <ul className={styles.icons}>
            <li className={`${styles.icon} ${styles.pp}`}><FaPaypal /></li>
            <li className={`${styles.icon} ${styles.visa}`}><FaCcVisa /></li>
            <li className={`${styles.icon} ${styles.mc}`}><FaCcMastercard /></li>
        </ul>
    </section>
);

export default Top;