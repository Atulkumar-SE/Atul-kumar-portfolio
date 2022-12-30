import React from 'react'
import Form from '../Components/Contact/Form'
import Footer from '../Components/Footer'
import HeroGlobal from '../Components/HeroGlobal'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
   <>
   <Navbar/>
   <HeroGlobal heading="Contact" text="To a Web Developer"/>
   <Form/>
    <Footer/>
   </>
  )
}

export default Contact
