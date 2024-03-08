import React from 'react'
import { VscSend } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import google from "../images/Group 18.png"
import appstore from "../images/Group 17.png"

const Footer = () => {
    return (
        <div className="container-fluid bg-black text-light">
            <footer className="py-5 container">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>İNFO</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Haqqımızda</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Məxfilik siyasəti</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Şərtlər & Qaydalar</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <h5>DƏSTƏK</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Tez-tez verilən suallar</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Bizimlə əlaqə</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <h5>ƏLAQƏ</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">+994552780013</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">mypaltar@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <p>Yeni gələnlər və eksklüziv təkliflər haqqında ən son yeniləmələri əldə etmək üçün abunə olun!</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-dark" type="button"><VscSend /></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>© 2024 Company, Inc. All rights reserved by <a className='text-light text-decoration-none' href="https://github.com/salimovrashad">@salimovrashad</a>.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="text-light fs-5" href="/"><FaInstagram /></a></li>
                        <li className="ms-3"><a className="text-light fs-5" href="/"><FiFacebook /></a></li>
                        <li className="ms-3"><a className="text-light fs-5" href="/"><FaLinkedinIn /></a></li>
                        <ul className="list-unstyled appstore d-flex">
                            <li className="ms-3"><a className="text-light" href="/"><img src={google} alt="" /></a></li>
                            <li className="ms-3"><a className="text-light" href="/"><img src={appstore} alt="" /></a></li>
                        </ul>
                    </ul>
                </div>
            </footer>
        </div>

    )
}

export default Footer