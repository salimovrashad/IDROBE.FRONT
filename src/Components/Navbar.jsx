import React, { useState } from 'react'
import logo from '../images/Logo İDrobe.png'
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";

import flag from "../images/azerbaijan-flag.png"
import flag1 from "../images/russian-flag.png"
import flag2 from "../images/united-states-flag.png"

const Navbar = () => {
    const [display, setDisplay] = useState("navbar-nav mx-auto");
    const [display1, setDisplay1] = useState("d-none");

    const changeHide = () => {
        if (display !== "d-none navbar-nav mx-auto") setDisplay("d-none navbar-nav mx-auto");
        else setDisplay("navbar-nav mx-auto");

        if (display1 !== "d-none") setDisplay1("d-none");
        else setDisplay1("m-0")
    };
    return (
        <nav className="navbar navbar-expand-lg bg-light border-bottom border-black" style={{ height: 100 }}>
            <div className="container-fluid">
                <a className="navbar-brand d-lg-none" href="/">
                    <img src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/"><FaInstagram /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"><FiFacebook /></a>
                        </li>
                        <li className="nav-item">
                            <button onClick={changeHide} className="nav-link"><CiSearch /></button>
                        </li>
                    </ul>
                    <ul className={display}>
                        <li className="nav-item">
                            <div class="dropdown">
                                <a class="nav-link dropdown-toggle d-flex align-items-center mx-2" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MAĞAZALAR
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/">KİRAYƏ</a></li>
                                    <li><a class="dropdown-item" href="/">SATIŞ</a></li>
                                    <li><a class="dropdown-item" href="/">BRENDLƏR</a></li>
                                </ul>
                            </div>
                        </li>
                        <a className="navbar-brand d-none d-lg-block" href="/">
                            <img src={logo} alt="" />
                        </a>
                        <li className="nav-item">
                            <div class="dropdown">
                                <a class="nav-link dropdown-toggle d-flex align-items-center mx-2" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    KİŞİ
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/male">T-shirts</a></li>
                                    <li><a class="dropdown-item" href="/">Polo shirts</a></li>
                                    <li><a class="dropdown-item" href="/">Hoodies & Sweatshirts</a></li>
                                    <li><a class="dropdown-item" href="/">Jackets & Coats</a></li>
                                    <li><a class="dropdown-item" href="/">Denim</a></li>
                                    <li><a class="dropdown-item" href="/">Suits</a></li>
                                    <li><a class="dropdown-item" href="/">Pants</a></li>
                                    <li><a class="dropdown-item" href="/">Shorts</a></li>
                                    <li><a class="dropdown-item" href="/">Sleepwear</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div class="dropdown">
                                <a class="nav-link dropdown-toggle d-flex align-items-center mx-2" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    QADIN
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/male">T-shirts</a></li>
                                    <li><a class="dropdown-item" href="/">Polo shirts</a></li>
                                    <li><a class="dropdown-item" href="/">Hoodies & Sweatshirts</a></li>
                                    <li><a class="dropdown-item" href="/">Jackets & Coats</a></li>
                                    <li><a class="dropdown-item" href="/">Denim</a></li>
                                    <li><a class="dropdown-item" href="/">Suits</a></li>
                                    <li><a class="dropdown-item" href="/">Pants</a></li>
                                    <li><a class="dropdown-item" href="/">Shorts</a></li>
                                    <li><a class="dropdown-item" href="/">Sleepwear</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul className={display1}>
                        <li className='nav-item'>
                            <div className="input-group" style={{width:"880px"}} id='search'>
                                <input type="text" className="form-control" placeholder="Mən Axtarıram" aria-label="Mən Axtarıram" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2" onClick={changeHide}>X</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <div class="dropdown">
                                <a class="nav-link dropdown-toggle d-flex align-items-center mx-2" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className='mt-1 me-1' width={30} src={flag} alt="" />AZE
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/"><img className='mt-1 me-1' width={30} src={flag1} alt="" />RU</a></li>
                                    <li><a class="dropdown-item" href="/"><img className='mt-1 me-1' width={30} src={flag2} alt="" />ENG</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"><GoHeart /></a>
                        </li>
                        <li className="nav-item">
                            <a href='/signup' className='btn btn-dark ms-2'>SIGN UP</a>
                        </li>
                        <li className="nav-item">
                            <a href='/login' className='btn ms-2 text-decoration-underline'>Log in</a>
                        </li>
                        <li className="nav-item">
                            <a href='/profile' className='btn ms-2 text-decoration-underline'>Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >



    )
}

export default Navbar