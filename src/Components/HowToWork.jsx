import React from 'react'
import dress from '../images/Vector-Dress.png'
import doc from '../images/Vector-Doc.png'
import carrier from '../images/Vector-Carrier.png'

const HowToWork = () => {
    return (
        <div className="container-fluid px-5 pt-5" id="featured-3">
            <h1 className='text-center pb-5'>Necə işləyirik ?</h1>
            <div className="row g-4 pt-5 pb-5 row-cols-1 row-cols-lg-3 justify-content-evenly">
                <div className="feature col text-center" data-aos="fade-down" style={{width: "400px"}}>
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-none bg-gradient fs-2 mb-3">
                        <img src={dress} alt=''/>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">IDROBE</h3>
                    <p className='w-100'>Onlayn və ya şəxsi anbarımızda 5000-dən çox dizayner geyimlərinə göz atın. Yeni gələnlər həftəlik əlavə olunur!</p>
                </div>
                <div className="feature col text-center" data-aos="fade-up" style={{width: "400px"}}>
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-none bg-gradient fs-2 mb-3">
                    <img src={doc} alt=''/>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">ŞƏRTLƏR</h3>
                    <p className='w-100'>Sifarişinizi birbaşa qapınıza çatdırırıq. Məhsul 4-8 gün ərzində sizin olacaq və biz hər sifarişdə təsadüfi zədə sığortası təklif edirik.</p>
                </div>
                <div className="feature col text-center" data-aos="fade-down" style={{width: "400px"}}>
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-none bg-gradient fs-2 mb-3">
                    <img src={carrier} alt=''/>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">QAYTARILMA</h3>
                    <p className='w-100'>Geyimi sifariş etdiyiniz  çantaya geri qoyun və onu poçt qutusuna və ya poçt şöbəsinə göndərin. Geyimlərin quru təmizlənməsi bizdən. </p>
                </div>
            </div>
        </div>

    )
}

export default HowToWork