import React from 'react'
import Footer from '../Components/Footer'
import HeroProject from '../Components/HeroGlobal'
import Navbar from '../Components/Navbar'
import PricingCard from '../Components/Project/PricingCard'
import Work from '../Components/Project/work'

const Project = () => {
  return (
   <>
   <Navbar/>
   {/* ---------------Props present here--------------- */}
   <HeroProject heading="Project" text="Hard work Make us Smart."/>
   
   <Work/>

   {/* -------------------Pricing card created by css--------------- */}
   <PricingCard/>
    <h1 >Here you will see our Project.</h1>
    <Footer/>
   </>
  )
}

export default Project
