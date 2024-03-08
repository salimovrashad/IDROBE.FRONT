import React from 'react'
import dress from '../images/Vector-Dress.png'
import doc from '../images/Vector-Doc.png'
import carrier from '../images/Vector-Carrier.png'

const HowToWork = () => {
    return (
        <div className="container-fluid px-5 pt-5" id="featured-3">
            <h1 className='text-center'>Necə işləyirik ?</h1>
            <div className="row g-4 pt-5 pb-3 row-cols-1 row-cols-lg-3 justify-content-evenly">
                <div className="feature col" style={{width: "400px"}}>
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-none bg-gradient fs-2 mb-3">
                        <img src={dress} alt=''/>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">IDROBE</h3>
                    <p className='w-100'>Browse from over 5,000 designer dresses and accessories online or at our Melbourne warehouse. New arrivals added weekly!</p>
                </div>
                <div className="feature col" style={{width: "400px"}}>
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-none bg-gradient fs-2 mb-3">
                    <img src={doc} alt=''/>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">ŞƏRTLƏR</h3>
                    <p className='w-100'>We will deliver your dress right to your door step. The dress is yours for 4 or 8 days and we offer accidental damage insurance for piece of mind.</p>
                </div>
                <div className="feature col" style={{width: "400px"}}>
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-none bg-gradient fs-2 mb-3">
                    <img src={carrier} alt=''/>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">QAYTARILMA</h3>
                    <p className='w-100'>Simply pop your dress back in the prepaid satchel provided and post into a Post Box or Post Office. We handle all the dry cleaning.</p>
                </div>
            </div>
        </div>

    )
}

export default HowToWork