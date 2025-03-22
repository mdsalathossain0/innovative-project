import React from 'react'
import Images from './Images'
import Subheading from './Subheading'

const ContactCard = ({image,title,text }) => {
  return (
    <div className=' hover:bg-fourth group/main bg-white w-[370px] text-center flex flex-col justify-center items-center rounded-[20px] shadow-xl py-14 duration-500'>
            <Images src={image}/>
            <h3 className='text-third text-[30px] font-bold font-san leading-9 pt-8  group-hover/main:text-[#FAFAFE] duration-300' >{title} </h3>
            <Subheading className='w-[275px] pt-4 group-hover/main:text-[#E6E5F3] duration-300' text={text}/>
            <h6 className='group/one relative text-lg text-third font-bold font-san leading-6 pt-4 group-hover/main:text-[#F4F4F5]'>Read more <span className='w-[30px] h-[40px] bg-[#1bbf0080] absolute top-2 -right-2.5 rounded-r-[100px] group-hover/one:w-[120px] group-hover/one:rounded-[100px] duration-300 group-hover/main:bg-[#f4f4f580]' ></span></h6>
    </div>
  )
}

export default ContactCard