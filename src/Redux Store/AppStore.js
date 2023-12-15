import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./CreateSlice"
import movieReducer from "./movieSlice"

export const store = configureStore({
  reducer: {
    app:appReducer,
    movie:movieReducer
  },
})
