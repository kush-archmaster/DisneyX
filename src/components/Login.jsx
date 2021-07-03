import React from 'react';
import '../css/login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const alertIt = () =>{
        toast.dark('Log In to Access Wonder 👀',{
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
    }

    return (
        <div className='login'>
            <div className="content-box">
                <img src="/images/cta-logo-one.svg" alt="" />
                <p className="signup" onClick={alertIt}>
                   get all there
                </p>
                <div className="descript">
                Subscribe to get more out of Disney+ Hotstar. As of 03/26/21, the price of the Disney bundle will increase by $1.
                </div>
                <img src="/images/cta-logo-two.png" alt="" className='sizeit' />
            </div>
        </div>
    )
}

export default Login
