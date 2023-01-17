import React ,{useEffect, useState } from 'react';
//styles
import styles from './categories.module.css';
//components
import Groups from './Groups';
import Product from './Product';


const Categories = ({products , searchValue , serchedProducts}) => {

    const [mensClothing ] = useState(products.filter(product => product.category === "men's clothing"));
    const [jewelery  ] = useState(products.filter(product => product.category === "jewelery"));
    const [electronics ] = useState(products.filter(product => product.category === "electronics"));
    const [womensClothing ] = useState(products.filter(product => product.category === "women's clothing"));
    useEffect(()=>{
        document.title = 'Categories';
    },[])


    return (
        <div>
            {searchValue ?
                serchedProducts.length?
                    <div className={styles.container}>
                        {serchedProducts.map(product => <Product key={product.id} productData={product}/>)}
                    </div>:
                    <div className={styles.notFound}>
                        <h1 >No Product Found!</h1>
                    </div>:

        <div>
            <Groups products={mensClothing} category="Men's Clothing"/> 
            <Groups products={womensClothing} category="Women's Clothing"/> 
            <Groups products={electronics} category="Electronics"/> 
            <Groups products={jewelery} category="Jewelery"/>
            </div>

        }
        </div>
        );
};

export default Categories;