import React from 'react'
import Navbar from '../Components/Navbar'

const SignUp = () => {
    return (
        <>
            <Navbar />
            <div className='d-flex'>
                <section className="get-in-touch">
                    <h1 className="title">QEYDİYYAT</h1>
                    <form className="contact-form row">

                        <div className="form-field col-lg-6">
                            <input id="name" className="input-text js-input" type="text" required />
                            <label className="label" htmlFor="name">Ad/ Soyad</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="email" className="input-text js-input" type="email" required />
                            <label className="label" htmlFor="email">E-mail</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="pass" className="input-text js-input" type="password" required />
                            <label className="label" htmlFor="pass">Şifrə</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="phone" className="input-text js-input" type="number" required />
                            <label className="label" htmlFor="phone">Mobil Nömrə</label>
                        </div>

                        <div className="form-field col-lg-6">
                            <input id="re-password" className="input-text js-input" type="password" required />
                            <label className="label" htmlFor="re-password">Təkrar Şifrə</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="birthday" className="input-text js-input" type="text" required />
                            <label className="label" htmlFor="birthday">Doğum tarixi</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="country" className="input-text js-input" type="text" required />
                            <label className="label" htmlFor="country">Şəhər</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="region" className="input-text js-input" type="text" required />
                            <label className="label" htmlFor="region">Rayon</label>
                        </div>

                        <div className="form-field col-lg-12">
                            <button className='submit-btn' type='submit' >DAXİL OL</button>
                        </div>
                    </form>
                </section>
                <div className='signupphoto'></div>
            </div>
        </>
    )
}

export default SignUp