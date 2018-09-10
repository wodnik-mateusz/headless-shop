import React from 'react';
import styles from './Footer.sass';
import Top from './elements/Top/Top';
import Middle from './elements/Middle/Middle';

const Footer = () => (
    <footer>
        <Top />
        <Middle />
        <section className={styles.map}>
            {/* <img src="https://m20.targeo.pl/i/cache/static/miasto/wr/wroclaw.png" width="500" height="500" alt="Planets" usemap="#citymap" />

            <map name="citymap">
                <area shape="rect" coords="0,0,82,126" href="sun.htm" alt="Sun" />
                <area shape="circle" coords="90,58,3" href="mercur.htm" alt="Mercury" />
                <area shape="circle" coords="124,58,8" href="venus.htm" alt="Venus" />
            </map> */}
        </section>
        <section className={styles.rights}>
        
        </section>
    </footer>
);

export default Footer;