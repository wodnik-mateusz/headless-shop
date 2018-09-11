import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import styles from './Filters.sass';
import productStyles from '../Product/Product.sass';
import {MdFilterList} from 'react-icons/md';

const Filters = ({data, handleFilters}) => (
    <article id="filters" className={`${productStyles.product} ${styles.filters}`}>
        <header className={styles.top}>
        
        </header>
        <ul className={styles.categories} onChange={e => handleFilters(e.target)}>
            {data.map(category => (
                <li key={category.id} className={styles.category}>
                    <label>
                        <input id={category.id} type="checkbox" defaultChecked={false}/>
                        {category.name} ({category.count})
                    </label>
                </li>
            ))}
        </ul>
        <footer className={styles.bottom}>
            <button className={styles.apply}><MdFilterList /></button>
        </footer>
    </article>
);

export default Filters;