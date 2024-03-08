import React from 'react'
import Navbar from '../Components/Navbar'
import NewProducts from '../Components/NewProducts'
import Brends from '../Components/Brends'
import Footer from '../Components/Footer'
import FemaleHeader from '../Components/FemaleHeader'
import FemaleSectionTwo from '../Components/FemaleSectionTwo'

const Female = () => {
  return (
    <div>
        <Navbar />
        <FemaleHeader />
        <FemaleSectionTwo />
        <NewProducts />
        <Brends />
        <Footer />
    </div>
  )
}

export default Female