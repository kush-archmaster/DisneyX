import React from 'react';
import '../css/movies.css';
import { NavLink } from 'react-router-dom';

//gettig acces to the global state having movies in it
import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';

const Movies = () => {

    //getting the state data from the react store
    const movies = useSelector(selectMovies);
   // console.log(movies)
    
    /*console.log(movies[15])
    console.log(movies[15].backgroundImg)
    console.log(movies[15].description)
    console.log(movies[15].subTitle)
    console.log(movies[15].cardImg)
    console.log(movies[15].titleImg)
    console.log(movies[15].title)*/
    

    return (
        <div className='movies'> 
            <h3>Recommended for You</h3>
            {/*movies in this slot */}
              <div className="movies-row">
                {
                    movies &&
                       movies.map((movie)=> (
                        <div className="wrap" key={movie.id}>
                               <NavLink exact to={`/detail/${movie.id}`}>
                                  <img src={movie.cardImg} 
                                  alt="" />
                               </NavLink> 
                  </div>
                       ))

                }
                
              </div>
        </div>
    )
}

export default Movies
