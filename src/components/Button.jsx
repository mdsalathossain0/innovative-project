import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`bg-secondary text-lg font-semibold font-san text-white px-7 py-3.5 rounded-[100px] border border-transparent hover:border-secondary hover:bg-transparent hover:text-white ${className}`}>{text}</button>
  )
}

export default Button