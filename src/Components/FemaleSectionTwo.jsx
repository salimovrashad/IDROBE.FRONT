import React from 'react'
import photo from '../images/5 pièces tendance à adopter ce printemps - Rosepaillettee 1.png'
import photo1 from '../images/Без названия 2.png'

const FemaleSectionTwo = () => {
    return (
        <div className="container-fluid col-xxl-12 px-4 py-5">
            <div className="row flex-lg-row align-items-end g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={photo} className="d-block mx-lg-auto" alt="Bootstrap Themes" width={570} height={950} loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <img src={photo1} className="d-block mx-lg-auto" alt="Bootstrap Themes" width={635} height={660} loading="lazy" />
                    <div className='w-75 mx-lg-auto mt-5'>
                        <h1>Amazing Every Day</h1>
                        <p className="lead mb-5 lh-lg">Nuuly Rent is about discovering something new, loving something you never expected and surprising yourself in the best possible way. It's about getting creative with what you wear every single day—not just on special occasions. Nuuly Rent is about discovering something new, loving something you never expected and surprising yourself in the best possible way. It's about getting creative with what you wear every single day—not just on special occasions</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="loadmore">Hamısına Bax</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default FemaleSectionTwo