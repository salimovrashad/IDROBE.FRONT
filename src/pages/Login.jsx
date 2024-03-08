import React from 'react'
import Navbar from '../Components/Navbar'

const Login = () => {
    return (
        <>
            <Navbar />
            <div className='d-flex'>
                <div className='signupphoto'></div>
                <section className="get-in-touch">
                    <h1 className="title">GİRİŞ</h1>
                    <form className="contact-form row">
                        <div className="form-field col-lg-6 ">
                            <input id="email" className="input-text js-input" type="email" required />
                            <label className="label" htmlFor="email">E-mail</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="pass" className="input-text js-input" type="password" required />
                            <label className="label" htmlFor="pass">Şifrə</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <button className='submit-btn' type='submit' >DAXİL OL</button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}

export default Login