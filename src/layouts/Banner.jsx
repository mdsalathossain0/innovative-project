import React from 'react'
import Subheading from '../components/Subheading'
import Container from '../components/Container'
import Button from '../components/Button'

const Banner = () => {
  return (
    <section className='bg-banner w-full bg-no-repeat bg-cover bg-center '>
        <div className='bg-[#6b62c5e6] w-full py-[210px]'>
            <Container>
            <h1 className='text-center text-[84px] w-[962px] mx-auto leading-[100px] text-[#FAFAFE] font-bold font-san pt-5 pb-4'>You’re unique.Your website should be too</h1>
            <Subheading className='text-[#ffffff99] leading-10 w-[715px] mx-auto text-center pb-4' text='A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. '/>

            <div className='flex gap-x-10 justify-center items-center'>
                <Button text='Get Free Quoto'/>
                <Button text='Learn More'/>
            </div>
            </Container>
        </div>
    </section>
  )
}

export default Banner