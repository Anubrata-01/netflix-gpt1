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
    movieDetails: {
      cureentMovieDetails: null,
      cureentMovieTrailer: null,
    },
    movieCredits: {
      cureentMovieCredits: null,
      id: 4,
      cast: null,
    },
    similarMovies: null,
    TvShows: {
      Airing_today: null,
      On_Air: null,
      Popular: null,
    },
    MovieSection: null,
    MovieGenre: null,
    GenreBasedMovies: null,
    PlayerTrailer: null,
    GenreId: null,
    MyList: null,
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
    addCurrentMovieCredits: (state, action) => {
      state.movieCredits.cureentMovieCredits = action.payload;
    },
    addCurrentMovieCast: (state, action) => {
      state.movieCredits.cast = action.payload;
    },
    addCurrentMovieDetails: (state, action) => {
      state.movieDetails.cureentMovieDetails = action.payload;
    },
    addCurrentMovieTrailer: (state, action) => {
      if (state.movieDetails.cureentMovieTrailer !== null) {
        state.movieDetails.cureentMovieTrailer = [];
      }
      state.movieDetails.cureentMovieTrailer = action.payload;
    },
    addPlayerTrailer: (state, action) => {
      if (state.PlayerTrailer !== null) {
        state.PlayerTrailer = [];
      }
      state.PlayerTrailer = action.payload;
    },
    addSimilarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
    addTvShows: (state, action) => {
      state.TvShows.Airing_today = action.payload;
    },
    addmoviesToMovieSection: (state, action) => {
      state.MovieSection = action.payload;
    },
    addMovieGenre: (state, action) => {
      state.MovieGenre = action.payload;
    },
    addMoviesBasedOnGenreId: (state, action) => {
      if (state.GenreBasedMovies !== null) {
        state.GenreBasedMovies = [];
      }
      state.GenreBasedMovies = action.payload;
    },
    addToMyList: (state, action) => {
      state.MyList = state.MyList || [];
      // Check if the item is not already in the list
      if (!state.MyList.some((item) => item.id === action.payload.id)) {
        // Create a new array by spreading the existing items and adding the new item
        state.MyList = [...state.MyList, action.payload];
      }
    },
    addGenreId: (state, action) => {
      if (state.GenreId === null) {
        state.GenreId = action.payload;
      }
    },
  },
});
export const {
  addMovies,
  addMoviestoPopular,
  addMoviestotopRated,
  addCurrentMovieCredits,
  addCurrentMovieCast,
  addCurrentMovieDetails,
  addCurrentMovieTrailer,
  addSimilarMovies,
  addTvShows,
  addmoviesToMovieSection,
  addMovieGenre,
  addMoviesBasedOnGenreId,
  addToMyList,
  addGenreId,
  addPlayerTrailer,
} = movieSLice.actions;
export default movieSLice.reducer;
