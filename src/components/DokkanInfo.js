import React from 'react';
//fontawesome
import '../font/font/css/font-awesome.min.css';
//styles
import styles from './dokkanInfo.module.css';

const DokkanInfo = () => {
    return (
        <div className={styles.container}>

            <div className={styles.column1}>
                <h2>Dokkan online store, review, choose and buy online</h2>
                <p>A reliable online shopping requires a store that can deliver diverse, high-quality, and reasonably priced goods to its customers in a short period of time, and also guarantee the return of the goods; Features that the Dokkan online store has been working on for years and has been able to have its regular customers in this way.</p>
            </div>

            <div className={styles.column2}>
                <h3>be with us!</h3>

                <div className={styles.iconContainer}>
                    <a href="https" target="_blank">
                        <i className='fa fa-instagram'></i>
                    </a>

                    <a href="https" target="_blank">
                        <i className='fa fa-linkedin'></i>
                    </a>

                    <a href="https" target="_blank">
                        <i className='fa fa-whatsapp'></i>
                    </a>

                    <a href="https" target="_blank">
                        <i className='fa fa-twitter'></i>
                    </a>

                    <a href="https" target="_blank">
                        <i className='fa fa-telegram'></i>
                    </a>

                    <a href="https" target="_blank">
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>

                </div>


            </div>
        </div>
    );
};

export default DokkanInfo;