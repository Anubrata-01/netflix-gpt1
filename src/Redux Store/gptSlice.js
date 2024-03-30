import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptShow: false,
    supportedLan: "en",
    movieNames: null,
    movieResults: null,
    results:null
  },
  reducers: {
    gptToogleShow: (state) => {
      state.gptShow = !state.gptShow;
    },
    chooseYourLang: (state, action) => {
      state.supportedLan = action.payload;
    },
    storeGptSearchMovie: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearMovieResults: (state, action) => {
      state.movieNames = null;
      state.movieResults = null;
      // state.results=null;
  },
    setResults:(state,action)=>{
      state.results=action.payload
    }
  },
});
export const { gptToogleShow, chooseYourLang, storeGptSearchMovie,setResults,clearMovieResults} =
  gptSlice.actions;
export default gptSlice.reducer;
