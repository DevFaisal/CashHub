import React from "react";
import { useSelector } from "react-redux";

function AmountTable({ type, color }) {
    const AllTransaction = useSelector((state) => state.Transaction);
    const transections = AllTransaction.allTransaction;

    const calculatedAmount = transections
        .filter((transaction) => transaction.type === type)
        .reduce((acc, curr) => (acc += curr.amount), 0);

    return (
        <>
            <table>
                <h1 className="text-2xl text-center font-semibold">{type.toUpperCase()} TABLE</h1>
                <thead>
                    <tr className="flex justify-between bg-green-600 text-white p-1 m-2 rounded-md shadow-md text-sm md:text-xl">
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transections
                        .filter((transaction) => transaction.type === type)
                        .map((transaction, index) => (
                            <tr
                                className="flex justify-between items-center bg-white p-1 m-2 rounded-md shadow-md md:text-xl"
                                key={index}
                            >
                                {/* <td className="bg-green-700  text-white items-center flex justify-center rounded-full">
                                    {index + 1}
                                </td> */}
                                <td>{transaction.date.slice(5, 10)}</td>
                                <td className="text-sm italic">{transaction.description}</td>
                                <td style={{ color: color }} className="font-semibold md:text-2xl">
                                    ₹ {transaction.amount}
                                </td>
                            </tr>
                        ))}
                    <tr className="flex justify-between bg-red-600 text-white p-1 m-2 rounded-md shadow-md text-xl">
                        <th className="text-3xl">Total</th>
                        <th className="text-3xl">₹{calculatedAmount}</th>
                    </tr>
                </tbody>
            </table>
        </>
    );

}

export default AmountTable;
