import { useEffect, useState } from 'react'
import ShopCard from './ShopCard'
import image1 from '../images/image 8.png'
import image2 from '../images/image 21.png'
import axios from 'axios';

const NewProducts = () => {
    // const [product, setProduct] = useState([]);
    // useEffect(() => {
    //     axios.get('http://localhost:7080/api/product/get-all-product?isDeleted=false')
    //     .then(res => setProduct(res.data.data.items))
    // })
    // useEffect(() => {
    //     axios.get('https://dummyjson.com/products')
    //     .then(res => setProduct(res.data.products))
    // })
    return (
        <div className="album pb-5 d-flex justify-content-center">
            <div className="w-75">
                <h1 className='my-5 pb-3 border-bottom border-black d-flex justify-content-between align-items-center'>Yeni gələnlər <a href='' className='all text-dark fs-5'>Hamısına Bax -</a><a href='' className='allres text-dark fs-5'>--</a></h1>
                <div className="row mt-3 g-3">
                {/* {product.slice(0,8).map((item) => (
                    <ShopCard key={item.id} photo={item.imagePath} title={item.title} price={item.price} />
                    ))
                } */}
                <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                <ShopCard key="1" photo={image1} photo2={image2} title="Zara qara midi boy bel detaylı assimmetrik don" price="123" />
                </div>
            </div>
        </div>
    )
}

export default NewProducts