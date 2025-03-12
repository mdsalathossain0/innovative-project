import React from 'react'

const List = ({text, className}) => {
  return (
    <li className={`text-lg font-semibold text-primary list-none font-san hover:text-secondary ${className}`}>{text}</li>
  )
}

export default List