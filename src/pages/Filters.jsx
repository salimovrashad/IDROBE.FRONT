import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Col, ListGroup, Row } from 'react-bootstrap'
import ShopCard from '../Components/ShopCard'
import axios from 'axios'
import image1 from '../images/image 8.png'
import image2 from '../images/image 21.png'
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";

const Filters = () => {
    const [product, setProduct] = useState([]);
    // useEffect(() => {
    //     axios.get('https://dummyjson.com/products')
    //         .then(res => setProduct(res.data.products))
    // })


    const a = <div className="row g-3">
    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
    </div>
    const [inc, setInc] = useState("");
    const changeInc = () => {
        setInc(a);
    };

    const [display, setDisplay] = useState("");
    const changeHide = () => {
        if (display !== "d-none") setDisplay("d-none");
        else setDisplay("");
    };
    return (
        <div>
            <Navbar />
            <p className='text-center fs-2 mt-5'>Geyimlərin Siyahısı</p>
            <div className="container-fluid">
                <Row md={12} className="py-5 justify-content-center">
                    <Col sm={2} md={2}>
                        <h1 className='mx-2' onClick={changeHide}>Filter {display != "d-none" ? <MdArrowDropDown /> : <MdArrowLeft />}</h1>
                        <ListGroup className={display} id='filter'>
                            <ListGroup.Item>Ölçü</ListGroup.Item>
                            <ListGroup.Item>Rəng</ListGroup.Item>
                            <ListGroup.Item>Uzunluq</ListGroup.Item>
                            <ListGroup.Item>Geyim Növü</ListGroup.Item>
                            <ListGroup.Item>Qiymət</ListGroup.Item>
                            <ListGroup.Item>Qol Növü</ListGroup.Item>
                            <ListGroup.Item>Brend</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={9} md={9}>
                        <Row className="g-1">
                            <nav className="navbar navbar-expand-lg bg-body-tertiary py-4 mb-2">
                                <div className="container-fluid">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <div className="cursor ms-3">{product.length} məhsul</div>
                                        </li>
                                    </ul>
                                    <ul className='navbar-nav'>
                                        <li className='cursor me-3'>Sort by Price(high-low)</li>
                                        <li className='cursor me-3'>Sort by Price(low-high)</li>
                                    </ul>
                                </div>
                            </nav>
                            {/* {product.length === 0 ? (
                                <h1>Loading...</h1>
                            ) : (
                                product.slice(0,8).map((item) => (
                                    <ShopCard key={item.id} photo={item.images[0]} title={item.title} price={item.price} />
                                ))
                            )} */}
                            <div className="container text-center">
                                <div className="row g-3">
                                    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                                    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                                    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                                    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                                    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                                    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                                    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                                    <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                                </div>
                                {inc}
                                <button onClick={changeInc} className='btn btn-dark mt-4 py-3' role='button' style={{width: "330px"}}>Daha çox...</button>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}

export default Filters