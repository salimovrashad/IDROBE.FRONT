import React from 'react'
import '../css/product.css'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";

const ShopCard = ({ photo, photo2, title, price, id }) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="product-grid">
                <div className="product-image">
                    <a href="/" className="image">
                        <img height={"400px"} className="pic-1" src={photo} alt='/' />
                        <img height={"400px"} className="pic-2" src={photo2} alt='/' />
                    </a>
                </div>
                <div class="d-flex flex-row-reverse justify-content-between align-items-center mt-2 mb-2">
                    <span className='fs-4'><HiOutlineShoppingBag /> <IoMdHeartEmpty /></span>
                    <div class="colors">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="/">{title}</a></h3>
                    <p> <span className='text-danger'>250m</span> <span className='px-1'></span> <span className='text-decoration-line-through'>350m</span> </p>
                </div>
            </div>
        </div>

    )
}

export default ShopCard