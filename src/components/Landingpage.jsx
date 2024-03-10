import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Events from './Events'
import Cover from './Cover' 
import Details from './Details' 
import Faq from './Faq'
import Contact from './contactus'
import AwardSlider from './AwardSlider'
import Footer from './footer'


function Landingpage() {
  return (
    <>
      <NavBar /> 
      <Home />
      <About />
      <Events />
      <Cover />
      <Details />
      <AwardSlider />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}

export default Landingpage
