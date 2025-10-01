import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function HomePage() {
  return (
    <>
        {/* <Navbar /> */}  {/* maine ise router me hi kr diya taki sbhi pages jaye ni to hr page me dalna hota */}
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        {/* <Footer />  */}
    </>
  )
}
