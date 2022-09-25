import "./HomeScreen.css";
import React from 'react';
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
// Components
import Product from "../components/Product";
//Actions
import {getProducts as listProducts} from '../redux/actions/productActions';


const HomeScreen = () => {

  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div className="homescreen">
      <h1 className="homescreen-title">All products</h1>
      <div className="homescreen-products">
        {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map(product => (
          <Product
          key={product._id}
          name={product.name}
          description={product.description}
          price={product.price}
          image1={product.image1}
          productId={product._id}
        />
        ))}
      </div>
    </div>
  );
};


export { HomeScreen };
