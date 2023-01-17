import React from 'react';
//components
import SmallProduct from './SmallProduct';
//styles
import styles from './category.module.css';

const Category = ({title , data , index}) => {


    return (
        <div className={styles.container}>

            <h1 className={styles.title}>{title}</h1>
            <div className={styles.products_container}>

                {/* {
                    data.map(item => <SmallProduct key={item.id} data={item}/>)
                } */}
                <SmallProduct data={data[Number(index[0])]}/>
                <SmallProduct data={data[Number(index[1])]}/>
                <SmallProduct data={data[Number(index[2])]}/>
                <SmallProduct data={data[Number(index[3])]}/>
                <SmallProduct data={data[Number(index[4])]}/>
                <SmallProduct data={data[Number(index[5])]}/>
            </div>

        </div>
        
        




    )
        
    




};

export default Category;