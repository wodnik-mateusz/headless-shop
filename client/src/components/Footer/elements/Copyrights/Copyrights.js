import React from 'react';
import styles from './Copyrights.sass';
import { MdCopyright } from 'react-icons/md';

const Copyrights = () => (
    <section className={styles.copyrights}>
        <small className={styles.info}><MdCopyright /> All rights reserved</small>
    </section>
);

export default Copyrights;