import React from 'react';
//styles
import styles from './getapp.module.css';
//icons
import '../font/font/css/font-awesome.min.css';
import appStore from '../assets/images/apple-svgrepo-com.svg';
import googlePlay from '../assets/images/google-play-store-logo-svgrepo-com.svg';


const Getapp = () => {
    return (
        <div className={styles.container}>
            <h3>Get Dokkan App <i className="fa fa-download" aria-hidden="true"></i>
            </h3>
            <div className={styles.btnContainer}>

                <a target='_blank' rel="noreferrer" className={styles.btn} href="https://www.apple.com/app-store/">
                    <img src={appStore} alt="appStore"/>
                    <div>
                        <span>Get it on</span>
                        <span>App Store</span>
                    </div>
                </a>

                <a target='_blank' rel="noreferrer" className={styles.btn} href="https://chrome.google.com/webstore/detail/google-play/">
                    <img src={googlePlay} alt="googlePaly"/>
                    <div>
                        <span>Get it on</span>
                        <span>Google Play</span>
                    </div>
                </a>

            </div>
        </div>
    );
};

export default Getapp;