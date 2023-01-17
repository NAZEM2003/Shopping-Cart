import React, { useEffect } from 'react';
//components
import Category from './Category';
import DokkanInfo from './DokkanInfo';
import Getapp from './Getapp';
import Product from './Product';
//slider
import Slider from './Slider';
//styles
import styles from './home.module.css';
import '../font/font/css/font-awesome.min.css';

const Home = ({products , searchValue , serchedProduct}) => {
    
    useEffect(()=>{
        document.title = 'Dokkan';
    },[])
    
    return (
        
        <div>
            
            {products ? 
                searchValue ?
                serchedProduct.length?
                    <div className={styles.container}>
                        {serchedProduct.map(product => <Product key={product.id} productData={product}/>)}
                    </div>:
                    <div className={styles.notFound}>
                        <h1 >No Product Found!</h1>
                    </div>:
                    
                <div>

                    <Slider/>
                    <Category title='Favorites' data={products} index={[1,15,3,6,7,19]}/> 
                    <Category title='Offers' data={products} index={[5,13,4,2,12,18]}/>
                    <Category title='Bestsellers' data={products} index={[3,8,9,10,11,14]}/>
                    <Getapp/>
                    <DokkanInfo/>
                </div>:

                <h1>Loading...</h1>
            
            }
        </div>
      
    );
};

export default Home;