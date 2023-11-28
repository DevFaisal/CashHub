import React, { useEffect } from 'react'
import { BadgeIndianRupee, IndianRupee } from "lucide-react"
import { useSelector } from "react-redux";


function IncomeExpenses({ name, color }) {

    const transactionState = useSelector((state) => state.Transaction)
    const allTransaction = transactionState.allTransaction
    let Amount = 0;
    let wholeAmount = 0;
    const calculate = () => {
        const allincome = allTransaction.forEach((tran) => {
            wholeAmount += tran.amount
            if (tran.type === name.toLowerCase()) {
                Amount += tran.amount
            }
        })

    }
    calculate()


    return (
        <>
            <div className="flex  justify-between items-center md:w-full p-10 mx-5 mt-2 md:m-10 text-white bg-[#1D3557] rounded-lg">
                <div>
                    <h1 className=" flex items-center gap-1 text-4xl mb-2">
                        <BadgeIndianRupee size={40} /> {name}
                    </h1>
                </div>
                <div className='flex items-center bg-white rounded-lg p-1' >
                    <IndianRupee size={40} color={color} stroke-width={2.5} /> <h1 style={{ color: color }} className={`text-2xl md:text-5xl font-semibold`}>{Amount}</h1>
                </div>

            </div>
        </>
    )
}

export default IncomeExpenses