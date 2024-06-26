import React, { useContext, useState } from 'react'
import logo from '../images/Logo İDrobe.png'
import { GoHeart } from "react-icons/go";

import flag from "../images/azerbaijan-flag.png"
import flag1 from "../images/russian-flag.png"
import flag2 from "../images/united-states-flag.png"
import { LangContext } from '../context/LangContext';

const Navbar = () => {
    const [display, setDisplay] = useState("navbar-nav mx-auto");
    const [display1, setDisplay1] = useState("d-none");

    const [lang, setLang] = useContext(LangContext);

    const changeHide = () => {
        if (display !== "d-none navbar-nav mx-auto") setDisplay("d-none navbar-nav mx-auto");
        else setDisplay("navbar-nav mx-auto");

        if (display1 !== "d-none") setDisplay1("d-none");
        else setDisplay1("m-0")
    };
    return (
        <nav className="navbar navbar-expand-lg bg-light border-bottom border-black" style={{ height: 80 }}>
            <div className="container-fluid">
                <a className="navbar-brand d-lg-none" href="/">
                    <img src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className={display}>
                        <a className="navbar-brand d-none d-lg-block" href="/">
                            <img src={logo} alt="" />
                        </a>
                        <li className="nav-item">
                            <div class="dropdown">
                                <a class="nav-link dropdown-toggle d-flex align-items-center mx-2" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {lang === 'en' ? "MALE" : "KİŞİ"}
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/male">Hamısı</a></li>
                                    <li><a class="dropdown-item" href="/">Köynəklər</a></li>
                                    <li><a class="dropdown-item" href="/">Polo köynəklər</a></li>
                                    <li><a class="dropdown-item" href="/">Hoodies & Sweatshirts</a></li>
                                    <li><a class="dropdown-item" href="/">Gödəkçələr və Paltolar</a></li>
                                    <li><a class="dropdown-item" href="/">Denim</a></li>
                                    <li><a class="dropdown-item" href="/">Kostyumlar</a></li>
                                    <li><a class="dropdown-item" href="/">Şortiklər</a></li>
                                    <li><a class="dropdown-item" href="/">Pijamalar</a></li>
                                    <li><a class="dropdown-item" href="/">Digər</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div class="dropdown">
                                <a class="nav-link dropdown-toggle d-flex align-items-center mx-2" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {lang === 'en' ? "FEMALE" : "QADIN"}
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/female">Hamısı</a></li>
                                    <li><a class="dropdown-item" href="/">Donlar</a></li>
                                    <li><a class="dropdown-item" href="/">Köynəklər</a></li>
                                    <li><a class="dropdown-item" href="/">Sviterlər və Kardiqanlar</a></li>
                                    <li><a class="dropdown-item" href="/">Gödəkçələr və Paltolar</a></li>
                                    <li><a class="dropdown-item" href="/">Hoodies & Sweatshirts</a></li>
                                    <li><a class="dropdown-item" href="/">Yubkalar</a></li>
                                    <li><a class="dropdown-item" href="/">Denim</a></li>
                                    <li><a class="dropdown-item" href="/">Şalvarlar</a></li>
                                    <li><a class="dropdown-item" href="/">Şortiklər</a></li>
                                    <li><a class="dropdown-item" href="/">Pijamalar</a></li>
                                    <li><a class="dropdown-item" href="/">{lang === "en" ? "Log Out" : "Çıxış"}</a></li>
                                </ul>
                            </div>
                        </li>
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
                        <li className="nav-item">
                            <a class="nav-link d-flex align-items-center mx-2" href="/products" role="button">
                                MƏHSULLAR
                            </a>
                        </li>
                    </ul>

                    <ul className={display1}>
                        <li className='nav-item'>
                            <div className="input-group" style={{ width: "880px" }} id='search'>
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
                                <button class="nav-link dropdown-toggle d-flex align-items-center mx-2" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className='mt-1 me-1' width={30} src={lang === 'en' ? flag2 : flag} alt="" />{lang === 'en' ? "ENG" : "AZE"}
                                </button>
                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item" onClick={() => {
                                        lang === 'en' ? setLang('az') : setLang('az');
                                        lang === 'en' ? localStorage.setItem('lang', 'az') : localStorage.setItem('lang', 'az');
                                    }}><img className='mt-1 me-1' width={30} src={flag} alt="" />AZE</button></li>
                                    <li><a class="dropdown-item" href="/"><img className='mt-1 me-1' width={30} src={flag1} alt="" />RU</a></li>
                                    <li><button class="dropdown-item" onClick={() => {
                                        lang === 'az' ? setLang('en') : setLang('en');
                                        lang === 'az' ? localStorage.setItem('lang', 'en') : localStorage.setItem('lang', 'en');
                                    }}><img className='mt-1 me-1' width={30} src={flag2} alt="" />ENG</button></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"><GoHeart /></a>
                        </li>
                        <li className="nav-item">
                            <div class="dropdown">
                                <a class="btn btn-dark ms-2 dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Qeydiyyatdan Keç
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/">Mağaza</a></li>
                                    <li><a class="dropdown-item" href="/">Fiziki Şəxs</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href='/login' className='btn btn-outline-dark ms-2 btn'>Daxil Ol</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >



    )
}

export default Navbar