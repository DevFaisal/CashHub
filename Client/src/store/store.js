import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authStore"

const store = configureStore({
    reducer: {
        auth: authSlice,
    } // Reducers go here
})

export default store  // Export the store to be used in the app