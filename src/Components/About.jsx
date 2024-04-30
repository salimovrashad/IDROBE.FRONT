import React from 'react'
import aboutbg from '../images/Без названия (4) 2.png'

const About = () => {
    return (
        <div className="my-5 d-flex justify-content-center" style={{height: "550px"}}>
            <div className="px-5 d-flex" style={{ width: "90%"}}>
                <div className="py-5 d-flex flex-column justify-content-center">
                    <h1 className="fw-bold" data-aos="fade-down">Bizim <br/> Haqqımızda</h1>
                    <p className="col-lg-10 lead py-3" data-aos="fade-up">
                    IDROBE hər zövqə və şəraitə uyğun yüksək dəbdən tutmuş gündəlik geyimə qədər alış və ya icarəyə verilə bilən couture və geyim mağazası əşyalarının geniş seçimini təklif edir. Keyfiyyət və müştəri məmnuniyyətinə diqqət yetirən IDROBE rahat alış-veriş həllini təklif edir.
                    </p>
                    <button className='w-25 btn btn-outline-dark py-3' data-aos="fade-up">Ətraflı məlumat üçün</button>
                </div>
                <div>
                    <img data-aos="fade-left" src={aboutbg} alt="" height="606px"/>
                </div>
            </div>
        </div>
    )
}

export default About