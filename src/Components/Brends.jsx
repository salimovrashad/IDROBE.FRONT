import React from 'react'
import "../css/brands.css"
import brand1 from '../images/brand-logos_citizens-of-humanity_olive.png'
import brand2 from '../images/brand-logos_ayr_olive.png'
import brand3 from '../images/brand-logos_yumi-kim_olive.png'
import brand4 from '../images/brand-logos_gal-meets-glam_olive.png'
import brand5 from '../images/brand-logos_AGOLDE_olive.png'

const Brends = () => {
    return (
        <div className="container pb-5" id="icon-grid">
            <h2 className="pb-2 border-bottom border-black">Brendlər</h2>
            <div class="h-100 mt-5">
                <div class="row align-items-center h-100">
                    <div class="container rounded">
                        <div class="slider">
                            <div class="logos">
                                <img src={brand1} alt="" className='mx-5' />
                                <img src={brand2} alt="" className='mx-5' />
                                <img src={brand3} alt="" className='mx-4' />
                                <img src={brand4} alt="" className='mx-4' />
                                <img src={brand5} alt="" className='mx-4' />
                            </div>
                            <div class="logos">
                                <img src={brand1} alt="" className='mx-5' />
                                <img src={brand2} alt="" className='mx-5' />
                                <img src={brand3} alt="" className='mx-4' />
                                <img src={brand4} alt="" className='mx-4' />
                                <img src={brand5} alt="" className='mx-4' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Brends