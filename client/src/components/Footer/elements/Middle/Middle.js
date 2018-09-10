import React from 'react';
import styles from './Middle.sass';
import { MdEmail, MdPhone, MdMap } from 'react-icons/md';

const Middle = () => (
    <section className={styles.middle}>
        <div className={styles.card}>
            <header className={styles.header}>
                <div className={styles.icon}><MdEmail /></div>
                <h5 className={styles.title}>Email</h5>
            </header>
            <a className={styles.action} href="mailto:info@shop.com">info@shop.com</a>
        </div>
        <div className={styles.card}>
            <header className={styles.header}>
                <div className={styles.icon}><MdPhone /></div>
                <h5 className={styles.title}>Phone</h5>
            </header>
            <a className={styles.action} href="tel:+48691933520">+48691933520</a>
        </div>
        <div className={styles.card}>
            <header className={styles.header}>
                <div className={styles.icon}><MdMap /></div>
                <h5 className={styles.title}>Find Us</h5>
            </header>
            <button className={styles.action}>Show map</button>
        </div>
    </section>
);

export default Middle;