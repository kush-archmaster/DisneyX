import React, { useEffect } from 'react';
import '../css/home.css';
import ImageSlider from './ImageSlider';
import Sections from './Sections';
import Movies from './Movies';

//importing database
import db from '../firebase';

//for dispatching value to state
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

const Home = () => {

    const dispatch = useDispatch(); // same as in context api where we used useReducer Hook

    useEffect(()=>{
         db.collection('movies').onSnapshot((snap)=>{
             let movies = snap.docs.map((doc)=>{
                // console.log(doc.data());
                 return {id: doc.id, ...doc.data()}
             })

             //dispatching this value to our state by 
             //triggering an action
             dispatch(setMovies(movies))

             // eslint-disable-next-line 
         })},[])

    return (
        <main className='home'>
           <ImageSlider />
           <Sections />
           <Movies />
        </main>
    )
}

export default Home
