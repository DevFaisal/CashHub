import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allTransaction: []
}

const tranSlice = createSlice({
    name: "allTransactions",
    initialState,

    reducers: {
        allTrans: (state, action) => {
            state.allTransaction = action.payload
        }
    }

})

export const { allTrans } = tranSlice.actions
export default tranSlice.reducer