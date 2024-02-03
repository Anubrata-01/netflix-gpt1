import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptShow: false,
    supportedLan: "en",
    movieNames: null,
    movieResults: null,
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
  },
});
export const { gptToogleShow, chooseYourLang, storeGptSearchMovie } =
  gptSlice.actions;
export default gptSlice.reducer;
