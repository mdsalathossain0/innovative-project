import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Button from '../components/Button'
import ContactCard from '../components/ContactCard'

import Scardimgone from '../assets/scardimg1.png'
import Scardimgtwo from '../assets/scardimg2.png'
import Scardimgthree from '../assets/scardimg3.png'
import Scardimgfour from '../assets/scardimg4.png'
import Scardimgfive from '../assets/scardimg5.png'

const Service = () => {
  return (
    <section className='bg-[#F6F5FF] py-[100px]'>
        <Container>
            <Flex className='gap-[30px] flex-wrap'>
                <div className='w-[370px]'>
                    <Heading text='What We Do'/>
                    <p className='w-[350px] text-[#6C7D93] font-normal font-san leading-8 pt-5 pb-14'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
                    <Button className='hover:text-red-600' text='Contact Us'/>
                </div>
                <ContactCard image={Scardimgtwo} title='Web design & Dev ' text='Social Media has changed the way we interact & do business while creating'/>
                <ContactCard image={Scardimgone} title='Software Dev ' text='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
                <ContactCard image={Scardimgthree} title='Content Writing' text='Social Media has changed the way we interact & do business while creating a new avenue.'/>
                <ContactCard image={Scardimgfour} title='Digital Marketing' text='Social Media has changed the way we interact & do business while creating a new avenue.'/>
                <ContactCard image={Scardimgfive} title='Support & Training' text='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
            </Flex>
        </Container>
    </section>
  )
}

export default Service