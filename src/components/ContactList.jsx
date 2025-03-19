import React from 'react'
import Flex from './Flex'
import Images from './Images'
import Subheading from './Subheading'



const ContactList = ({text,image,className}) => {
  return (
    <div>
        <Flex className={`items-center gap-x-5 pb-6 pt-5 ${className}`}>
            <div>
                <Images src={image}/>
            </div>
            <Subheading className='w-[320px]' text={text}/>
        </Flex>
    </div>
  )
}

export default ContactList