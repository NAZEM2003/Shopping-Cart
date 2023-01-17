import React from 'react';
import { useParams , Link } from 'react-router-dom';
//styles
import styles from './ProductDetails.module.css'

const Datails = ({products}) => {
    const params = useParams();
    const id = params.id;
    const product =  products[id - 1]
    const {image , title , description , category ,  price} = product;
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />

            <div className={styles.textContainer}>
                

                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category :</span> {category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/">Back To Shop</Link>
                </div>

            </div>

        </div>
    );
};

export default Datails;