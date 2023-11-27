import React from 'react'
import { BadgeIndianRupee } from "lucide-react"

function IncomeExpenses({ name }) {
    return (
        <>
            <div className="flex flex-col justify-between items-start md:w-full p-10 mx-5 mt-2 md:m-10 text-white bg-[#1D3557] rounded-lg">
                <div>
                    <h1 className=" flex items-center gap-1 text-4xl mb-2">
                        <BadgeIndianRupee size={40} /> {name}
                    </h1>
                    <p className="text-gray-300">
                        All Your {name}'s will be displayed here
                    </p>
                </div>

            </div>
        </>
    )
}

export default IncomeExpenses