import React from 'react'

const GallaryInfo = ({heading, text}) => {
  return (
    <div className='border-r-2 border-[#4f585f33] pr-5 last:border-0'>
        <h4 className='text-secondary text-[64px] font-extrabold font-san leading-[68px]'>{heading}</h4>
        <p className='text-third text-[36px] font-bold font-san leading-[40px]'>{text}</p>
    </div>
  )
}

export default GallaryInfo