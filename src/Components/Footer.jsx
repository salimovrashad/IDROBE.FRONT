import React from 'react'
import { VscSend } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import google from "../images/Group 18.png"
import appstore from "../images/Group 17.png"
import idlogo from "../images/LogoWhite.png"

const Footer = () => {
    return (
        <div className="container-fluid bg-black text-light">
            <footer className="pt-5 container-fluid w-75">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-4 mb-3 me-3">
                        <form>
                            <img src={idlogo} alt="" className='pb-3'/>
                            <p>Yeni gələnlər və eksklüziv təkliflər haqqında ən son yeniləmələri əldə etmək üçün abunə olun!</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-dark" type="button"><VscSend /></button>
                            </div>
                        </form>
                    </div>
                    <div className="col-5 col-md-2 mb-3">
                        <h5>İNFO</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Haqqımızda</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Məxfilik siyasəti</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Şərtlər & Qaydalar</a></li>
                        </ul>
                    </div>
                    <div className="col-5 col-md-2 mb-3">
                        <h5>DƏSTƏK</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Tez-tez verilən suallar</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Bizimlə əlaqə</a></li>
                        </ul>
                    </div>
                    <div className="col-5 col-md-2 mb-3">
                        <h5>ƏLAQƏ</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">+994552780013</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">mypaltar@gmail.com</a></li>
                        </ul>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="text-light fs-5" href="/"><FaInstagram /></a></li>
                            <li className="ms-3"><a className="text-light fs-5" href="/"><FiFacebook /></a></li>
                            <li className="ms-3"><a className="text-light fs-5" href="/"><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                    <div className="col-5 col-md-1 mb-3">
                        <h5>TƏTBİQ</h5>
                        <ul className="list-unstyled appstore">
                            <li className="mt-3"><a className="text-light" href="/"><img src={google} alt="" /></a></li>
                            <li className="mt-3"><a className="text-light" href="/"><img src={appstore} alt="" /></a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-center py-4 mt-5 border-top">
                    <p className='text-white-50'>İDrobe.az © 2023. Bütün hüquqlar qorunur.</p>
                </div>
            </footer>
        </div>

    )
}

export default Footer