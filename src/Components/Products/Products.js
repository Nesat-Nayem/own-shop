import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addWishList, setProducts } from '../../redux/slice';
import Card from '../Card/Card';
import './Products.css'

const Products = () => {

    const products = useSelector((state) => state.products.allProducts);
    const cart = useSelector((state) => state.products.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:5000/products')
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
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    


    return (
        <div>
        <div className="container mx-auto procontrol d-flex justify-content-between  align-items-center">
            <p className='m-0'>Total Product found {products.length}</p>

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
    </div>
    );
};

export default Products;