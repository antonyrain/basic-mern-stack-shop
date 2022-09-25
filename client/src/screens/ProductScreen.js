import "./ProductScreen.css";
import React from 'react';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
//Components
import ProductImgGallery from "../components/ProductImgGallery";
// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";


const ProductScreen = () => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, error, product } = productDetails;

    const params = useParams();

    useEffect(() => {
        if (product && params.id !== product._id) {
        dispatch(getProductDetails(params.id));
        }
        
    }, [dispatch, params, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
    };

    return (
        <div className="productscreen-grid-container">
            {loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (
            <>
                <div className="productscreen-block-1">
                    <ProductImgGallery
                    key={product._id}
                    name={product.name}
                    image1={product.image1}
                    image2={product.image2}
                    image3={product.image3}
                    image4={product.image4}
                    image5={product.image5}
                    productId={product._id}
                    />
                </div>
                <div className="productscreen-block-3">
                    <div className="add-to-cart-info">
                        <p className="productscreen-name">Name:<span>{product.name}</span></p>
                        <p className="file-formats">File formats: <span>{product.formats}</span></p>
                        <p className="productscreen-shortdescript">Model: <span>{product.short_description}</span></p>
                        <p>Price: <span>${product.price}</span></p>
                        <p>Status: <span>{product.countInStock > 0 ? "Ready to Download" : "Out of Stock"}</span></p>
                        <p>
                            Qty:
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map((x) => (
                                    <option key={x+1} value={x+1}>{x+1}</option>
                                ))}
                            </select>
                        </p>
                        <div className="conteiner-button-cart">
                        <p><button type="button" onClick={addToCartHandler}>Add To Cart</button></p>
                        </div>
                    </div>
                </div>
                <div className="productscreen-block-4">
                    <p className="productscreen-description">{product.description}</p>
                </div>
            </>
            )}
        </div>
    )
}


export {ProductScreen}