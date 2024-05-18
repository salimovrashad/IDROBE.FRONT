import React from 'react'
import photo from '../images/5 pièces tendance à adopter ce printemps - Rosepaillettee 1.png'

const FemaleSectionTwo = () => {
    return (
        <div className="femaletwo container-fluid col-xxl-12 px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-4 pb-1">
                <div className="col-lg-7">
                    <div className='w-75 mx-lg-auto'>
                        <h1>Daima möhtəşəm görün</h1>
                        <p className="lead mb-5 lh-lg">Xüsusi günlərinizi və hər gününüzü IDrobe ilə rəngləndirin. Moda evlərindən və brendlərdən geyim alaraq və ya icarə götürərək hər gün möhtəşəm görünün. </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="loadmore">Hamısına Bax</button>
                        </div>
                    </div>
                </div>
                <div className="femaleimage col-10 col-sm-8 col-lg-5">
                    <img src={photo} className="d-block mx-lg-auto" loading="lazy" />
                </div>
            </div>
        </div>  
    )
}

export default FemaleSectionTwo