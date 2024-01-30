import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptShow:false,
        supportedLan:"en",
        gptSearchMovies:null
        
    },
    reducers:{
        gptToogleShow:(state)=>{
            state.gptShow=!state.gptShow;
        },
        chooseYourLang:(state,action)=>{
            state.supportedLan=action.payload;
        },
        storeGptSearchMovie:(state,action)=>{
            if(state.gptSearchMovies !==null){
                state.gptSearchMovies=action.payload
            }
            state.gptSearchMovies=action.payload

        }
    }
})
export const { gptToogleShow,chooseYourLang,storeGptSearchMovie }= gptSlice.actions;
export default gptSlice.reducer;