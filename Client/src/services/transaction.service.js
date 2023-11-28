import axios from "axios"
import { useSelector } from 'react-redux';


const newTransaction = async (data, userId) => {

    const { Amount, option, Discription, } = data
    console.log(data)
    console.log(userId)
    const trans = axios.post(`${import.meta.env.VITE_URL}user/transaction`, {
        userId,
        amount: Amount,
        description: Discription,
        type: option,
        date: Date.now()
    })
    if (trans) {
        return trans
    }
    return Error()
}

const getAllTransaction = async (userId) => {
    const trans = axios.get(`${import.meta.env.VITE_URL}user/gettransactions`,
        { params: { userId } })
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err)
        })
    if (!trans) return Error()
    return trans;
}
export { newTransaction, getAllTransaction }