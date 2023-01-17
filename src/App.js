import React, { useContext, useState } from 'react';
import {Route , Routes , Navigate} from 'react-router-dom';
//style
import styles from './App.module.css'
//components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Signup from './components/SignUp';
import Login from './components/Login';
import ShopCart from './components/ShopCart';
import Categories from './components/Categories';
import Datails from './components/shared/Datails';
//Context
import { ProductsContext } from './context/ProductsContextProvider';
//gif
import loading from './gif/spinner.gif'



const App = () => {
  const [searchValue , setSearchValue] = useState('');
  const products = useContext(ProductsContext);

  const searchHandler = (event)=>{
    setSearchValue(event.target.value)
  }

  var serchedProducts;
  if(products){
  serchedProducts = products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()));
  }
  
  return (
  
      <div>
        {products ?
          <div className={styles.App}>
            <Navbar searchValue={searchValue} searchHandler={searchHandler}/>
            <Routes>
              <Route path='/' element={<Home products={products} searchValue={searchValue} serchedProduct={serchedProducts}/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/cart' element={<ShopCart/>}/>
              <Route path='/categories' element={<Categories products={products} searchValue={searchValue} serchedProducts={serchedProducts}/>}/>
              <Route path='datails/:id' element={<Datails products={products}/>}/>
              <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
            <Footer/>

          </div>:
          <div className={styles.loadingContainer}>
            <img src={loading} alt="loading"/>
            <h1>loading...</h1>
          </div>
        }


      </div>
  );
};

export default App;