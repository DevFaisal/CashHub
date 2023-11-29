import React, { useEffect, useState } from 'react'
import { allTrans } from "../store/transactionStore"
import { useDispatch, useSelector } from "react-redux";
import { getAllTransaction } from '../services/transaction.service';
import AllTransactions from './AllTransactions';


function GetTransactions() {
    const authState = useSelector((state) => state.auth);
    const userId = authState.userData._id
    const [transactions, setTransactions] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const allTransaction = async () => {
            try {
                const fetchedTransaction = await getAllTransaction(userId)
                setTransactions(fetchedTransaction.data)
                dispatch(allTrans(fetchedTransaction.data))
            } catch (error) {
                console.error(error)
                // TODO: Handle the error and display an error message
            }
        }
        allTransaction()
    }) 

    return (
        <>
            <AllTransactions />
        </>
    )

}

export default GetTransactions