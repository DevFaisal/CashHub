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
    try {
        console.log("This is user ID", userId);

        // Make the Axios GET request with async/await
        const response = await axios.get(`${import.meta.env.VITE_URL}user/gettransactions`, {
            params: { userId }
        });

        console.log(response.data); // Log the response data

        return response.data; // Return the response data

    } catch (error) {
        console.error(error);
        return Error(); // You may want to handle this differently based on your application logic
    }
};

export { newTransaction, getAllTransaction }