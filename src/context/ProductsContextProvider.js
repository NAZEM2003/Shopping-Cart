import React,{useState , useEffect} from 'react';
import { getProducts } from '../services/api';


export const ProductsContext = React.createContext();

const ProductsContextProvider = (props) => {

    const [data , setData] = useState();


    useEffect(()=>{
        const fetchAPI = async () => {
            setData(await getProducts());
        }    
        fetchAPI()

    },[])


    return (
        <ProductsContext.Provider value={data}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;