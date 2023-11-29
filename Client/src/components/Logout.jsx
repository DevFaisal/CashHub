import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authStore'
import { CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    dispatch(logout())

    setTimeout(() => {
        navigate('/')
    }, 3000)

    return (
        <>
            <div className='flex flex-col gap-4 justify-center items-center h-screen'>
                <h1 className='text-4xl font-semibold'>Successfully LoggeOut</h1>
                <CheckCircle color='green' size={120} />
                <h4 className='text-2xl'>Thanks for Choosing us</h4>
            </div>
        </>
    )
}

export default Logout