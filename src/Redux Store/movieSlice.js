import { createSlice } from "@reduxjs/toolkit";
const movieSLice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: { nowPlayingmovies: null, id: 1 },
    popular: {
      popularMovies: null,
      id: 2,
    },
    topRated: {
      topMovies: null,
      id: 3,
    },
    movieDetails:{
      cureentMovieDetails:null,
      cureentMovieTrailer:null
    },
    movieCredits:{
      cureentMovieCredits:null,
      id:4,
      cast:null
    },
    similarMovies:null
  },

  reducers: {
    addMovies: (state, action) => {
      state.nowPlaying.nowPlayingmovies = action.payload;
    },
    addMoviestoPopular: (state, action) => {
      state.popular.popularMovies = action.payload;
    },
    addMoviestotopRated: (state, action) => {
      state.topRated.topMovies = action.payload;
    },
    addCurrentMovieCredits:(state,action)=>{
      state.movieCredits.cureentMovieCredits=action.payload
    },
    addCurrentMovieCast:(state,action)=>{
      state.movieCredits.cast=action.payload
    },
    addCurrentMovieDetails:(state,action)=>{
      state.movieDetails.cureentMovieDetails=action.payload;
    },
    addCurrentMovieTrailer:(state,action)=>{
      state.movieDetails.cureentMovieTrailer=action.payload;
    },
    addSimilarMovies:(state,action)=>{
      state.similarMovies=action.payload
    }

  },
});
export const { addMovies, addMoviestoPopular, addMoviestotopRated,addCurrentMovieCredits,addCurrentMovieCast,addCurrentMovieDetails,addCurrentMovieTrailer,addSimilarMovies } =
  movieSLice.actions;
export default movieSLice.reducer;
