import React, { useRef, useState }  from 'react';
import {Link} from 'react-router-dom'
//style
import styles from './Navbar.module.css'
//fontawesome
import '../font/font/css/font-awesome.min.css';


const Navbar = ({searchValue, searchHandler}) => {
    const [isOpen , setIsOpen] = useState(true);

    const sidebar = useRef()

    const showSidebar = (event)=>{
      isOpen ? 
      sidebar.current.style.width = '500px'
      :
      sidebar.current.style.width = '0'
      setIsOpen(!isOpen)
    }
    const showResult = (event)=>{
        if(event.code === "Enter"){
            showSidebar();
        }
    }
 

    return (
        <div className={styles.container}>

            <div className={styles.rowTop}>

                <div className={styles.section}>
                    <Link className={styles.logo} to='/'><h1>dokkan</h1></Link>

                    <div  className={styles.searchContainer}>
                        <i className=' fa fa-search' htmlFor="search"></i>
                        <input value={searchValue} onChange={searchHandler} id='search' type="text" name="search" placeholder='search'/>
                    </div>
                </div>

                <div className={styles.section}>
                    <Link to='/login' className={styles.loginContainer}>
                        <i className="fa fa-sign-in" aria-hidden="true"></i>
                        <span>Log in</span>
                    </Link>
                    <Link title='Cart' className={styles.cart} to='/cart'>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </Link>
                </div>







                    <button type='button' onClick={showSidebar} className={styles.sidebarToggle}>
                        <i className={isOpen ? "fa fa-bars" : "fa fa-times"} aria-hidden="true"></i>
                    </button>

                <div ref={sidebar} className={styles.sidebar}>
                    
                    <div  className={styles.sidebarSearch}>
                        <input onKeyDown={showResult} value={searchValue} onChange={searchHandler} id='sidebarSearch' type="text" name="search" placeholder='search'/>
                    </div>
                    
                    <ul className={styles.sidebarList}>
                        <li><Link onClick={showSidebar} to="/login">Log in</Link></li>
                        <li><Link onClick={showSidebar} to="/cart">Cart</Link></li>
                        <li><Link onClick={showSidebar} to="/categories">Categories</Link></li>
                        <li><Link onClick={showSidebar} to="">best selling</Link></li>
                        <li><Link onClick={showSidebar} to="">Offers</Link></li>
                        <li><Link onClick={showSidebar} to="">be seller</Link></li>
                        <li><Link onClick={showSidebar} to="">dokkan plus</Link></li>
                        
                    </ul>
                </div>

















            </div>

            <div className={styles.rowBottom}>
                <ul>

                    <li><Link to='/categories'>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        <span>Categories</span>
                    </Link></li>

                    <li><Link href='http'>
                        <i className="fa fa-trophy" aria-hidden="true"></i>
                        <span>best selling</span>
                    </Link></li>

                    <li><Link href='http'>
                        <i className='fa fa-gift'></i>
                        <span>Offers</span>
                    </Link></li>

                    <li><Link href='http'>be seller</Link></li>

                    <li><Link href='http'>dokkan plus</Link></li>
                    
                </ul>
            </div>


        </div>
    );
};

export default Navbar;