import React , {useState , useEffect} from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from "./SignUp.module.css"
import { Link } from 'react-router-dom';

const SignUp = () => {
    
    const [data , setData] = useState({
        name : '',
        email : '',
        password : '',
        confrimPassword : '',
        isAccepted : false
    })
    const [errors , setErrors] = useState({});
    const [toched , setToched] = useState({});


    const changeHandler = (event)=>{

       if(event.target.name === "isAccepted"){
            setData({...data , [event.target.name] : event.target.checked})
       }
       else{
            setData({...data , [event.target.name] : event.target.value})
       }
    }

    const focusHandler = event => {
        setToched({...toched , [event.target.name] : true})
    }
    const submitHandler = event => {
        event.preventDefault();
        notify();
        if(!Object.keys(errors).length){
           notify("you signed up successfully" , "success");
        }else{
            notify("invalid data" , "error");
            setToched({
                name : true,
                email : true,
                password : true,
                confrimPassword : true,
                isAccepted : true
            })
        }
    }

    useEffect(()=>{
        setErrors(validate(data , "signUp"))
        document.title = 'Sign Up';
    } , [data , toched])

    return (
        
        <div className={styles.container}>
            
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>SignUp</h2>

                <div className={styles.formField}>
                    <label>Name</label>
                    <input className={(errors.name && toched.name) ? styles.uncompleted : styles.formInput} id='name' type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.name && toched.name && <span>{errors.name}</span>}
                </div>
                
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
                
                <div className={styles.formField}>
                    <label>ConfrimPassword</label>
                    <input className={(errors.confrimPassword && toched.confrimPassword) ? styles.uncompleted : styles.formInput} id='confrimPassword' type="password" name="confrimPassword" value={data.confrimPassword} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.confrimPassword && toched.confrimPassword &&  <span>{errors.confrimPassword}</span>}
                </div>

                <div className={styles.formField}>

                    <div className={styles.checkBoxContaiiner}>
                        
                    <label>i accept terms of privacy policy</label>
                    <input id='isAccepted' type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler}/>
                    </div>


                    {errors.isAccepted && toched.isAccepted &&  <span>{errors.isAccepted}</span>}
                </div>

                <div className={styles.formButtons}>
                    <Link to='/login'>Login</Link>
                    <button type="submit">SignUp</button>
                    
                </div>

            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;