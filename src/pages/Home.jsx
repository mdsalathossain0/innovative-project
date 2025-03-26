import React from 'react'
import Nav from '../layouts/Nav'
import Banner from '../layouts/Banner'
import Contact from '../layouts/Contact'
import Gallary from '../layouts/Gallary'
import Service from '../layouts/Service'



const Home = () => {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Gallary/>
      <Contact/>
      <Service/>
    </div>
  )
}

export default Home