import React from 'react';
import styles from './Footer.sass';
import Top from './elements/Top/Top';
import Middle from './elements/Middle/Middle';
import Map from './elements/Map/Map';
import Copyrights from './elements/Copyrights/Copyrights';

const Footer = () => (
    <footer>
        <Top />
        <Middle />
        <Map />
        <Copyrights />
    </footer>
);

export default Footer;