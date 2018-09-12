import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Products.sass';
import Product from './elements/Product/Product';

const Products = ({data}) => (
    <section className={styles.products}>
        {data.map(product => <Product key={product.id} data={product} />)}
    </section>
);

export default Products;