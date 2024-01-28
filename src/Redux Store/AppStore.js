import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./CreateSlice"
import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice"

export const store = configureStore({
  reducer: {
    app:appReducer,
    movie:movieReducer,
    gptSlice:gptReducer,
  },
})
