import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state,action) =>{
            state.movies = action.payload;
        }
    }
})

//actions
export const {setMovies} = movieSlice.actions;

//state value
export const selectMovies = (state) => state.movie.movies;

//reducer
export default movieSlice.reducer;