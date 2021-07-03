import React, { useEffect } from 'react';
import '../css/header.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//from the redux state
import {selectUsername, setSignOut, selectPhoto} from '../features/user/userSlice';
import { setUserLogin } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';


import { auth, provider } from '../firebase';
import { useHistory } from 'react-router-dom';

import { Tooltip } from '@material-ui/core';

const Header = () => {
 
    const history = useHistory();

    //retrieving data from redux store
    const username = useSelector(selectUsername);
    const userprofile = useSelector(selectPhoto);

    const dispatch = useDispatch();

    //check whether login or not
    useEffect(()=>{
          auth.onAuthStateChanged(async (user) =>{
              if(user){
                   dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
               }))
               history.push('/')
              }
              else{
                  history.push('/login')
              }
              
          });
           // eslint-disable-next-line 
    },[])

    //sign in function
    const signin = async () =>{
            const response = await auth.signInWithPopup(provider);  //what user selects from the mail options
          //  console.log(response)
   
            let user = response.user;
          //  console.log(user)
          //passing values to the redux state 
            dispatch(setUserLogin({
                 name: user.displayName,
                 email: user.email,
                 photo: user.photoURL
            }))

            history.push('/');
            toast.dark(`Welcome, ${user.displayName}! Let's Go 🚀`,{
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })

     }

     const signout = async () =>{
        await auth.signOut();
        dispatch(setSignOut());
        history.push('/login');
        toast.dark('Logged Out 🙄',{
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
        <>
           <div className='header'>
            <img src='/images/logo.svg' className='header_logo' alt='disney'/>

            {/*nav options */}

            {
                !username ?
                 <div className='loginit' onClick={signin}>
                     Login
                 </div>

                : 
      <>
        <div className='nav_menu'>
            <div className='opts'>
               <a href='/'>
                   <img src="/images/home-icon.svg" alt=''/>
                   <span>HOME</span>
               </a>
               <a href='/'>
                   <img src="/images/search-icon.svg" alt=''/>
                   <span>Search</span>
               </a>
               <a href='/'>
                   <img src="/images/watchlist-icon.svg" alt=''/>
                   <span>watchlist</span>
               </a>
               <a href='/'>
                   <img src="/images/original-icon.svg" alt=''/>
                   <span>originals</span>
               </a>
               <a href='/'>
                   <img src="/images/movie-icon.svg" alt=''/>
                   <span>movies</span>
               </a>
               <a href='/'>
                   <img src="/images/series-icon.svg" alt=''/>
                   <span>series</span>
               </a>
               </div>

               <div className='avatar'>
                 <span>{username}</span>
                 <Tooltip title='Sign Out'>
                 <img src={userprofile} className='profileImg' alt="profile"
                  onClick={signout} />
                 </Tooltip>
                 </div>

        </div>
      
        <div className='hamburger'>
              
             <div className='avatar'>
                 <span>{username}</span>
                 <img src={userprofile} className='profileImg' alt="profile"
                  onClick={signout} />
                  </div>
        </div>
        
        {/*hamburger menu */}
       
        
     </>
    }
            </div>
        </>
    )
}

export default Header
