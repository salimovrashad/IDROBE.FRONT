import React from 'react'
import aboutbg from '../images/Без названия (4) 2.png'

const About = () => {
    return (
        <div className="about my-5 d-flex justify-content-center">
            <div className="div1 px-5 d-flex">
                <div className="div2 py-5 d-flex flex-column justify-content-center">
                    <h1 className="fw-bold col-12" data-aos="fade-down">Bizim <br/> Haqqımızda</h1>
                    <p className="col-lg-10 col-12 lead py-3" data-aos="fade-up">
                    IDROBE hər zövqə və şəraitə uyğun yüksək dəbdən tutmuş gündəlik geyimə qədər alış və ya icarəyə verilə bilən couture və geyim mağazası əşyalarının geniş seçimini təklif edir. Keyfiyyət və müştəri məmnuniyyətinə diqqət yetirən IDROBE rahat alış-veriş həllini təklif edir.
                    </p>
                    <button className='mx-3 w-25 btn btn-outline-dark py-3' data-aos="fade-up">Ətraflı məlumat üçün</button>
                </div>
                <div className='photo'>
                    <img src={aboutbg} alt="" height="606px"/>
                </div>
            </div>
        </div>
    )
}

export default About