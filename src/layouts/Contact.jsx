import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Button from '../components/Button'
import ContactList from '../components/ContactList'

import ListImage from '../assets/listimg.png'

const Contact = () => {
  return (
    <section className='py-[100px]'>
        <Container>
            <Flex>
                <div className='w-7/12'>
                  <ContactList className='w-[450px] shadow-lg py-9 px-2' text='We solve real-world problems through people and the web.' image={ListImage}/>
                  <ContactList className='w-[450px] hover:shadow-lg py-9 px-2' text='We make processes and technology work efficiently together.' image={ListImage}/>
                  <ContactList className='w-[450px] hover:shadow-lg py-9 px-2' text='We advance improve existing technology through research and development.' image={ListImage}/>
                  <ContactList className='w-[450px] hover:shadow-lg py-9 px-2' text='We develop long-lasting and scalable solutions, relationships partnerships.' image={ListImage}/>
                  
                </div>
                <div className='w-5/12'>
                    <Heading text='Why Choose Us'/>
                    <Subheading className='w-[395px] pt-3 pb-10' text='We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.'/>
                    <Button className='hover:text-[#1BBF00]' text='Contact Us'/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Contact