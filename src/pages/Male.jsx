import React from 'react'
import Navbar from '../Components/Navbar'
import NewProducts from '../Components/NewProducts'
import Brends from '../Components/Brends'
import Footer from '../Components/Footer'
import MaleHeader from '../Components/MaleHeader'
import MaleSectionTwo from '../Components/MaleSectionTwo'

const Male = () => {
  return (
    <div>
        <Navbar />
        <MaleHeader />
        <MaleSectionTwo />
        <NewProducts />
        <Brends />
        <Footer />
    </div>
  )
}

export default Male