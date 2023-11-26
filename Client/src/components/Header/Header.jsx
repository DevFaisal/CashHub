import React from 'react'
import { CircleDollarSign } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Header() {

    // const navigate = useNavigate()
    const navItems = [
        {
            name: "Home",
            path: "/home",
            isAuth: true
        },
        {
            name: "Login",
            path: "/login",
            isAuth: true
        },
        {
            name: "Register",
            path: "/register",
            isAuth: true
        },
    ]

    return (
        <>
            <div className='absolute top-0 w-full bg-[#E63946] p-3 flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <CircleDollarSign color='white' size={30} />
                    <h1 className=' text-3xl text-[#F1FAEE] font-bold'>CashHub</h1>
                </div>
                <ul className='flex gap-2 font-semibold'>
                    {navItems.map((item, index) => item.isAuth ? (
                        <li key={index}>
                            {/* <button onClick={e => navigate(item.path)}> */}
                            {item.name}
                            {/* </button> */}
                        </li>
                    ) : null)}
                </ul>
            </div>
        </>
    )
}

export default Header