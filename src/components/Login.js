import React , {useState , useEffect} from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from "./SignUp.module.css"
import { Link } from 'react-router-dom';

const Login = () => {
    
    const [data , setData] = useState({
        email : '',
        password : '',
    })
    const [errors , setErrors] = useState({});
    const [toched , setToched] = useState({});


    const changeHandler = (event)=>{
        setData({...data , [event.target.name] : event.target.value})
    }

    const focusHandler = event => {
        setToched({...toched , [event.target.name] : true})
    }
    const submitHandler = event => {
        event.preventDefault();
        notify();
        if(!Object.keys(errors).length){
           notify("you loged  in successfully" , "success");
        }else{
            notify("invalid data" , "error");
            setToched({
                email : true,
                password : true,
            })
        }
    }



    useEffect(()=>{
        setErrors(validate(data , "logIn"))
        document.title = 'Log in';
    } , [data , toched])

    return (
        
        <div className={styles.container}>
            
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
                
                <div className={styles.formField}>
                    <label>Email</label>
                    <input className={(errors.email && toched.email) ? styles.uncompleted : styles.formInput} id='email' type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.email && toched.email &&  <span>{errors.email}</span>}
                </div>
                
                <div className={styles.formField}>
                    <label>Password</label>
                    <input className={(errors.password && toched.password) ? styles.uncompleted : styles.formInput} id='password' type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.password && toched.password &&  <span>{errors.password}</span>}
                </div>

                <div className={styles.formButtons}>
                    <Link to='/signup'>Sign Up</Link>
                    <button type="submit">Login</button>
                    
                </div>

            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;