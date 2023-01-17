import React from 'react';
//styles
import styles from './groups.module.css';
//components
import Product from './Product';

const Groups = ({products , category}) => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{category}</h1>
            <div className={styles.productsContainer}>
                {products.map(product => <Product key={product.id} productData={product}/>)}
            </div>
        </div>
           
        
    );
};

export default Groups;