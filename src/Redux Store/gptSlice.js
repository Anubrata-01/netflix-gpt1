import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptShow:false,
        supportedLan:"en"
        
    },
    reducers:{
        gptToogleShow:(state)=>{
            state.gptShow=!state.gptShow;
        },
        chooseYourLang:(state,action)=>{
            state.supportedLan=action.payload;
        }
    }
})
export const { gptToogleShow,chooseYourLang }= gptSlice.actions;
export default gptSlice.reducer;