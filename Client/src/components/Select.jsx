import React from 'react'

function Select({
    options = [],
    ...props
}) {
    return (
        <div>
            <select {...props} className='px-3 py-3 font-semibold rounded-lg bg-white text-black outline-none' name="" id="">
                <option disabled className='p-2'>Choose Type</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
        </div>
    )
}

export default Select