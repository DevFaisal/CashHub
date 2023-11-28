import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authStore"
import transactionStore from "./transactionStore"
const store = configureStore({
    reducer: {
        auth: authSlice,
        Transaction: transactionStore,
    } // Reducers go here
})

export default store  // Export the store to be used in the app