import React , {useContext} from 'react';
import {Link} from 'react-router-dom';
//styles
import styles from './smallProduct.module.css'
//function
import { shorten , isInCart , quantityCount } from '../helper/functions';
//context
import { CartContext } from '../context/CartContextProvider';

const SmallProduct = ({data}) => {
    const {state , dispatch} = useContext(CartContext);
    return (
        <div className={styles.container}>
            <img className={styles.product_image} src={data.image} alt="product"/>

            <div className={styles.info_container}>
                <a href='http'><h2>{shorten(data.title)}</h2></a>
                <h4 className={styles.price}>{data.price} $</h4>

                <div className={styles.btn_container}>

                    <Link className={styles.datailsbtn} to={`/datails/${data.id}`}>Datails</Link>


                    {
                        quantityCount(state , data.id) ===1 && <button className={styles.smallbtn} onClick={()=> dispatch({type : 'REMOVE_ITEM' , payload : data})}><i className='fa fa-trash'></i></button>
                    }
                    {
                        quantityCount(state , data.id) > 1 && <button className={styles.smallbtn} onClick={()=>dispatch({type:"DECREASE" , payload : data})}>-</button>
                    }


                    {
                        quantityCount(state , data.id) > 0 && <span className={styles.counter}>{
                            quantityCount(state , data.id)
                        }</span>
                    }



                    {
                        isInCart(state , data.id)?
                        <button className={styles.smallbtn}
                        onClick={()=> dispatch({type : 'INCREASE' , payload : data})}>
                            +
                        </button>:

                        <button className={styles.addbtn} onClick={()=> dispatch({type : 'ADD_ITEM' , payload : data})}>add to Cart</button>
                    }

                </div>
            </div>
        </div> 
    );
};

export default SmallProduct;