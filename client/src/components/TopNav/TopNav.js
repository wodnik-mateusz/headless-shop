import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import styles from './TopNav.sass'

const TopNav = ({data}) => (
    <header className={styles.topNav}>
        <Link to={"/"}>
            <img src={logo} alt="logo" className={styles.logo}/>
        </Link>
        <ul className={styles.links} >
            {data.map(navItem => <li key={navItem.ID} className={styles.link}><Link to={navItem.url}>{navItem.title}</Link></li>)}
        </ul>
    </header>
);

export default TopNav;