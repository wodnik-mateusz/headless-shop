import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Products.sass';
import Product from './elements/Product/Product';
import Filters from './elements/Filters/Filters';

const Products = ({data, children}) => (
    <main className={styles.products}>
        {children}
        {/* <Filters /> */}
        {data.map(product => <Product key={product.id} data={product} />)}
    </main>
);

export default Products;