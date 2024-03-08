import React from 'react'
import '../css/product.css'

const ShopCard = ({ photo, photo2, title, price, id }) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="product-grid">
                <div className="product-image">
                    <a href="/" className="image">
                        <img height={"400px"} className="pic-1" src={photo} alt='/' />
                        <img height={"400px"} className="pic-2" src={photo2} alt='/' />
                    </a>
                    <span className="product-sale-label">{price} AZN</span>
                    <a href="/" className="product-like-icon" data-tip="Add to Wishlist">
                        <i className="far fa-heart" />
                    </a>
                    <ul className="product-links">
                        <li><a href="/"><i className="fa fa-search" /></a></li>
                        <li><a href="/"><i className="fas fa-shopping-cart" /></a></li>
                        <li><a href="/"><i className="fa fa-random" /></a></li>
                    </ul>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="/">{title}</a></h3>
                </div>
            </div>
        </div>

    )
}

export default ShopCard