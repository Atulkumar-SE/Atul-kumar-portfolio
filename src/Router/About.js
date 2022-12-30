import React from 'react'
import AboutPage from '../Components/AboutContent/AboutPage'
import Footer from '../Components/Footer'
import HeroGlobal from '../Components/HeroGlobal'
import Navbar from '../Components/Navbar'

const About = () => {
  return (
   <>
   <Navbar/>
   <HeroGlobal heading="About" text="I'm a UI Developer"/>
    <AboutPage/>
    <Footer/>
   </>
  )
}

export default About
