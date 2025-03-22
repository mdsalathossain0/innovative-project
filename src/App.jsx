import React from 'react'
import Nav from './layouts/Nav'
import Banner from './layouts/Banner'
import Gallary from './layouts/Gallary'
import Contact from './layouts/Contact'
import Service from './layouts/Service'

const App = () => {
  return (
    <div >
      <Nav/>
      <Banner/>
      <Gallary/>
      <Contact/>
      <Service/>
    </div>
  )
}

export default App