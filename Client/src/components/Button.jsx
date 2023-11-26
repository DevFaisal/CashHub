import React from 'react'

function Button(
    {
        type = "",
        children,
        bgColor = "bg-[#E63946]",
        textColor = "",
        className = ""
    }
) {
    return (
        <button type={type} className={`px-4 py-2 rounded-lg hover:bg-[#cd3a46] duration-300 ${bgColor} ${textColor} ${className}`}>{children}</button>
    )
}

export default Button