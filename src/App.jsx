import React from "react"
import Header from "./components/header/Header"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Footer from "./components/Footer/Footer"
import WorkExperience from './components/Work/WorkExperience'
import Contact from "./components/Contact/Contact"

import PricingSection from "./components/Pricing/Pricing"
import Testimonial from "./components/Testimonial/Testimonial"
import Project from "./components/project/Project"
import Counter from "./components/Counter/Counter"
function App() {


  return (
    <div>
      <section className='header_area'>
        <Header/>
      </section>
      <section id='about' className='about_area pt-70 pb-120'>
        <About/>
      </section>
      <section id='services' className='services_area pt-115 pb-120'>
        <Services/>
      </section>
      {/* <section id='project' className='project_area pt-125'>
        <Project />
      </section> */}
      {/* <section id='pricing' className='pricing_area gray-bg pt-115 pb-120'>
        <PricingSection/>
      </section> */}
      {/* <section id='testimonial' className='testimonial_area pt-115 pb-120'>
        <Testimonial/>
      </section> */}
      {/* <section id='counter' className='counter_area gray-bg pt-70 pb-120'>
        <Counter/>
      </section> */}
      <section id='work' className='work_experience_area pt-115'>
      <WorkExperience/>
      </section>
      <section id='contact' className='call_to_action_area'>
        <Contact/>
      </section>
      <footer id='footer' className='footer_area gray-bg pt-115 pb-120'>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
