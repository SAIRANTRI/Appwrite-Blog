import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor= 'bg-black',
    textColor= 'text-white',
    className = "",
    ...props
}) {

  return (
    <button className={`button p-4 relative border border-white inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${bgColor} ${textColor} ${className}`} {...props}>
         {children}
    </button>
  )
}

export default Button