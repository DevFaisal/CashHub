import React, { useEffect } from 'react'
import { allTrans } from "../store/transactionStore"
import { useDispatch, useSelector } from "react-redux";
import { getAllTransaction } from '../services/transaction.service';


function GetTransactions() {
    const authState = useSelector((state) => state.auth);
    const userId = authState.userData._id


    const allTransaction = async () => {
        console.log(userId)
        const fetchedTransaction = await getAllTransaction(userId)
        console.log(fetchedTransaction)
    }

    return (
        <>
            <h1>All Transactions</h1>
            <button onClick={allTransaction}>GET</button>
        </>
    )

}

export default GetTransactions