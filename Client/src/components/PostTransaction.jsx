import React from 'react'
import Input from './Input';
import Button from './Button';
import { useForm } from "react-hook-form";
import { newTransaction } from '../services/transaction.service';
import { useSelector } from 'react-redux';

function PostTransaction() {
    const authState = useSelector((state) => state.auth);
    const userId = authState.userData._id
    
    const { register, handleSubmit, } = useForm();

    const transaction = async (data) => {
        const singleTransaction = await newTransaction(data, userId)
        console.log(singleTransaction)
    }

    return (
        <>
            <div className="flex flex-col justify-between items-start w-full p-10 m-10 text-white bg-[#1D3557] rounded-lg">
                <form onSubmit={handleSubmit(transaction)}>
                    <div className='flex gap-1'>
                        <Input
                            placeholder="Amount"
                            type="Number"
                            {...register("Amount")}
                        />

                        <select className='px-3 py-3 font-semibold rounded-lg bg-white text-black outline-none' {...register("option")}>
                            <option value="income">Income</option>
                            <option value="expense">Expenses</option>
                        </select>
                        {/* <Select
                            options={SelectOptions}
                            {...register("TransactionType")}
                        /> */}
                        <Input
                            placeholder="Discription"
                            type="text"
                            {...register("Discription")}
                        />
                        <Button
                            type='submit'
                            children="Add"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default PostTransaction