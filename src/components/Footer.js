import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.rowTop}>

                <div className={styles.section}>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>email : almasjanloo149@gmail.com</li>
                        <li>phone number : 09918334277</li>
                    </ul>
                </div>


                <div className={styles.section}>
                    <h3>Shop</h3>
                    <ul>
                        <li><a href="http">contact us</a></li>
                        <li><a href="http">About us</a></li>
                        <li><a href="http">Rules and Privacy</a></li>
                    </ul>
                </div>

                <div className={styles.iconContainer}>
                    <h3>be with us!</h3>
                    <ul>
                        <li>
                            <a href="https" target="_blank">
                            <i className='fa fa-instagram'></i>
                            </a>
                        </li>


                        <li>
                            <a href="https" target="_blank">
                            <i className='fa fa-linkedin'></i>
                            </a>
                        </li>


                        <li>
                            <a href="https" target="_blank">
                            <i className='fa fa-whatsapp'></i>
                            </a>
                        </li>


                        <li>
                            <a href="https" target="_blank">
                            <i className='fa fa-twitter'></i>
                            </a>
                        </li>


                        <li>
                            <a href="https" target="_blank">
                            <i className='fa fa-telegram'></i>
                            </a>
                        </li>


                        <li>
                            <a href="https" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </li>

                    </ul>
                </div>
            
            </div>




            <div className={styles.rowBottom}>
                <p>© All rights are reserved for <Link to='/'>Dokkan</Link> 2022</p>
            </div>
        </div>
    );
};

export default Footer;