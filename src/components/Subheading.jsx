import React from 'react'

const Subheading = ({text, className}) => {
  return (
    <p className={`text-lg text-fourth leading-7.5 font-paprika ${className}`}>{text}</p>
  )
}

export default Subheading