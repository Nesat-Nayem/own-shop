import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addWishList, setProducts } from '../../redux/slice';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Products.css'

const Products = () => {

    const products = useSelector((state) => state.products.allProducts);
    console.log('form product folder',products)
    const cart = useSelector((state) => state.products.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        // fetch('http://localhost:5000/products')
        fetch('http://localhost:7070/api/products/getProduct')
        .then(res => res.json())
        .then(data => dispatch(setProducts(data)))
    }, [])

    // add to cart
    const addToCart = (product) => {
        const obj = { ...product };
        obj.quantity = 1;
        dispatch(addProduct(obj));
    }
    // add to wish list
    const addToWishlist = (product) =>{
        const obj = { ...product };
        obj.quantity = 1;
        dispatch(addWishList(obj));
    }

    // end of the code
    useEffect(()=>{
        // fetch('http://localhost:5000/products')
        fetch('http://localhost:7070/api/products/getProduct')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    


    return (
        <div>
            <Header></Header>
            <img  className=' product-banner img-fluid' src='https://i.postimg.cc/9X7ZHsYd/services-banner.webp' />
        <div className="container mx-auto procontrol d-flex justify-content-between  align-items-center">
            <h3 style={{color:'#FF0080'}} className='m-0 mt-5'>Total services found {products.length}</h3>

        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto mb-5">
          {
            products?.map(pro=>{
                  return(
                    <Card key={pro.id} product={pro} addToCart={addToCart} addToWishlist={addToWishlist}></Card>
                  )
              })
          }
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Products;