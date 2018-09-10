import React from 'react';
import styles from './Map.sass';

const Map = () => (
    <section className={styles.map}>
        <img src="https://i.ytimg.com/vi/wtXFWU4r9FQ/maxresdefault.jpg" 
            alt="Planets" usemap="#shopmap" className={styles.img} />

        <map name="shopmap">
            <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun" />
        </map> 
    </section>
);

export default Map;