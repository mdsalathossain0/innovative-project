import React from 'react'
import Flex from '../components/Flex'
import Images from '../components/Images'
import Container from '../components/Container'
import GallaryInfo from '../components/GallaryInfo'

import imageOne from '../assets/gallaryimg1.png'
import imageTwo from '../assets/gallaryimg2.png'
import imageThree from '../assets/gallaryimg3.png'
import imageFour from '../assets/gallaryimg4.png'
import imageElement from '../assets/gallaryelement.png'

const Gallary = () => {
  return (
    <section className='bg-[#F9F9FB] relative -z-20'>
        <Container>
        <Flex className='justify-around'>
            <div className='relative -top-[150px] -z-10'>
                <Images src={imageOne}/>
            </div>
            <div className='relative -top-[150px] -z-10'>
                <Images src={imageTwo}/>
            </div>
            <div className='relative -top-[150px] -z-10'>
                <Images src={imageThree}/>
            </div>
            <div className='relative -top-[150px] -z-10'>
                <Images src={imageFour}/>
            </div>
        </Flex>
         <Flex className='justify-between pb-[80px]'>
            <GallaryInfo heading='53k' text='Happy client'/>
            <GallaryInfo heading='10k' text='Projects Done'/>
            <GallaryInfo heading='120' text='Gets Award'/>
            <GallaryInfo heading='16' text='Operated Years'/>
         </Flex>
        </Container>
        <div className='absolute top-0 -right-[100px]'>
            <Images src={imageElement}/>
        </div>
    </section>
  )
}

export default Gallary