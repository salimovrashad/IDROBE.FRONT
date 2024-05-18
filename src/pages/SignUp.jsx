import React from 'react'
import Navbar from '../Components/Navbar'

const SignUp = () => {
    return (
        <>
            <Navbar />
            <div className='d-flex justify-content-center'>
                <section className="get-in-touch">
                    <h1 className="title">Bizə qoşul (Mağaza)</h1>
                    <form className="contact-form row">

                        <div className="form-field col-lg-6">
                            <input id="name" className="input-text js-input" type="text" required />
                            <label className="label" htmlFor="name">Ad/ Soyad/ Ata adı</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="text" className="input-text js-input" type="text" required />
                            <label className="label" htmlFor="text">Mağaza</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="pass" className="input-text js-input" type="text" required />
                            <label className="label" htmlFor="pass">Satıcı növü</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="email" className="input-text js-input" type="email" required />
                            <label className="label" htmlFor="email">Email</label>
                        </div>

                        <div className="form-field col-lg-6">
                            <input id="re-password" className="input-text js-input" type="text" required />
                            <label className="label" htmlFor="re-password">Logo</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="phone" className="input-text js-input" type="number" required />
                            <label className="label" htmlFor="phone">Əlaqə nömrəsi</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="country" className="input-text js-input" type="text" required />
                            <label className="label" htmlFor="country">Fin kod</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="region" className="input-text js-input" type="text" required />
                            <label className="label" htmlFor="region">Ünvan</label>
                        </div>

                        <div className="form-field col-lg-12 text-center">
                            <a href='/signup2' className='submit-btn m-2' type='submit' >Fiziki Şəxs</a>
                            <button className='submit-btn m-2' type='submit' >Növbəti</button>
                        </div>
                    </form>
                </section>
                
            </div>
        </>
    )
}

export default SignUp