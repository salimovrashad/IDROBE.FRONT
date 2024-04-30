import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import About from '../Components/About'
import SaleOrRent from '../Components/SaleOrRent'
import HowToWork from '../Components/HowToWork'
import NewProducts from '../Components/NewProducts'
import Brends from '../Components/Brends'

const Home = () => {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <SaleOrRent />
        <HowToWork />
        <NewProducts />
        <Brends />
        <Footer />
    </>
  )
}

export default Home