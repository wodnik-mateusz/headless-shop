import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.sass'
import {MdAddShoppingCart} from 'react-icons/md'

const Product = ({data}) => (
    <article className={styles.product}>
        <header className={styles.top}>
        
        </header>
        <img src={data.images[0].src} alt={data.name} className={styles.image}/>
        <footer className={styles.bottom}>
            <div className={styles.info}>
                <h3 className={styles.title}>{data.name}</h3>
                <p className={styles.text}>{data.short_description.slice(3, data.short_description.length - 5)}</p>
            </div>
            <button className={styles.cart}><MdAddShoppingCart /></button>
        </footer>
    </article>
);

export default Product;