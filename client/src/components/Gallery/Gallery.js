import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Gallery.sass';

const Gallery = ({data}) => (
    <section className={styles.gallery}>
        {data.map((image, idx) => <Link key={image.id} to={image.title.rendered} className={`${styles.image} ${styles["image-" + idx]}`} style={{backgroundImage: `url("${image.source_url}")`}}></Link>)}
    </section>
);

export default Gallery;