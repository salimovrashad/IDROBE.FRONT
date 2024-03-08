import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import powerplug from '../images/done.png'

const Success = () => {
    return (
        <>
            <Navbar />
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src={powerplug} alt='/' />
                <h1 className="display-1 fw-bold text-body-emphasis">Done..</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4 fs-2">Your process is successfully done.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Success