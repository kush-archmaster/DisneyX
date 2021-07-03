import React, { useEffect, useState } from 'react';
import '../css/detail.css';
import { useParams } from 'react-router';
import db from '../firebase';
import { useHistory } from 'react-router-dom';


const Detail = () => {

    const history = useHistory();
    const {id_} = useParams();
    //console.log(id)
    const [movie,setMovie] = useState({})

    const grabdoc = async () =>{
       const document = await db.collection('movies').doc(id_).get();
       if(document.exists){
           //save the movie
          setMovie(document.data())
       }
       else{
           //redirect to home page
           history.push('/')
       }
    }

    //console.log(movie)

    useEffect(()=>{
         //Grab the movie info from db
         grabdoc();
        // eslint-disable-next-line
    },[])
   

    return (
    <div className='details'>
            <div className='background'>
                <img src={movie.backgroundImg} alt="" />
            </div>
            

     <div className='reposn'>
 

            <div className="title">
                 <img src={movie.titleImg} alt="" />
            </div>
               <div className="controls">
                <button className="play">
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </button>
                <a href={movie.trailer} target='_blank' rel="noreferrer">
                  <button className="trailer">
                   <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                  </button>
                </a>
                <button className="add">
                    <span>+</span>
                </button>
                <button className="grpWatch">
                     <img src="/images/group-icon.png" alt="" />
                </button>
               </div>

               <div className="subtitle">
                   {movie.subTitle}
               </div>
               <div className="descript">
                  {movie.description}
               </div>
               
               <button className='glow-on-hover btn' onClick={()=>{
                   window.history.back();
               }}>Go back 🔙</button>
            </div>
    </div>
            
    )
}

export default Detail
