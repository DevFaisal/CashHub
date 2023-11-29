import React from 'react'
import { CircleDollarSign } from 'lucide-react'
import { Link } from 'react-router-dom';

function Landingpage() {
    return (
        <>
            <div className='flex flex-col gap-3 justify-center items-center h-screen'>
                <CircleDollarSign size={100} />
                <h1 className='text-7xl font-semibold'>Welcome to <span className='text-[#E63946]'>CashHub</span> </h1>
                <h3 className='text-2xl text-gray-800'>Your Personal Finance Manager</h3>
                <div>
                    <button className='bg-[#E63946] text-[#F1FAEE] p-3 rounded-md font-semibold'><Link to={'/login'}>Get Started</Link></button>
                </div>
            </div>
            <div className='h-screen'>
                <div className='flex flex-col gap-3 px-40 pt-20 w-full bg-white py-10'>
                    <h1 className='text-3xl font-semibold'>What is CashHub?</h1>
                    <p className='italic text-xl text-gray-700'>CashHub is a user-friendly platform designed to help you organize and control your finances effortlessly. Whether you're a student, a professional, or anyone in between, CashHub is tailored to suit your needs.</p>
                </div>
                <div className='flex flex-col gap-3 px-40 bg-orange-200 py-10 w-full'>
                    <h3 className='text-3xl font-semibold'>Key Features:</h3>
                    <ul>
                        <li className='italic text-xl text-gray-700' ><strong>Income Tracking:</strong> Easily log your sources of income. From paychecks to side hustles, CashHub
                            lets you record and categorize it all.</li>
                        <li className='italic text-xl text-gray-700' ><strong>Expense Management:</strong> Keep a close eye on where your money is going. Categorize and track your
                            expenses to make informed financial decisions.</li>
                        <li className='italic text-xl text-gray-700' ><strong>Budgeting Made Simple:</strong> Set budgets for different spending categories. CashHub provides
                            insights into your spending habits, helping you stay within your financial goals.</li>
                        <li className='italic text-xl text-gray-700' ><strong>Visualize Your Finances:</strong> Interactive charts and graphs give you a clear overview of your
                            financial health. Understand trends and plan for the future.</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 px-40 bg-ingido-200 py-10 w-ful'>
                    <h3 className='text-3xl font-semibold'>How it Works:</h3>
                    <ol>
                        <li className='italic text-xl text-gray-700'><strong>Sign Up:</strong> Creating your CashHub account is quick and easy. Just a few simple steps, and
                            you're ready to take control of your finances.</li>
                        <li className='italic text-xl text-gray-700'><strong>Record Transactions:</strong> Log your income and expenses as they happen. The intuitive interface
                            makes it a breeze to stay up-to-date.</li>
                        <li className='italic text-xl text-gray-700'><strong>Set Budgets:</strong> Define your spending limits for each category. CashHub will notify you if
                            you're approaching or exceeding your budget.</li>
                        <li className='italic text-xl text-gray-700'><strong>Track Progress:</strong> Watch your financial goals come to life. CashHub's tracking tools help you
                            understand your financial journey.</li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Landingpage