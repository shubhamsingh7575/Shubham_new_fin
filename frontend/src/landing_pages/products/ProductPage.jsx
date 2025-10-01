import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

export default function Productpage() {
  return (
    <>
        <Hero />
        <LeftSection 
          imageURL=""
          productName=""
          productDescription=""
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />
        <RightSection />
        <Universe />
    </>
  )
}
