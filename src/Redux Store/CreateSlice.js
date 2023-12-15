import { createSlice } from "@reduxjs/toolkit";
// import { Activity } from "lucide-react";
const appSlice=createSlice({
    name:"app",
    initialState:null,
    reducers:{
        addUserDetails:(state,action)=>{
            return action.payload
        },
        removeUserDetails:(state,action)=>{
            return null
        }
    }
})
export const {addUserDetails,removeUserDetails}=appSlice.actions;
export  default appSlice.reducer;