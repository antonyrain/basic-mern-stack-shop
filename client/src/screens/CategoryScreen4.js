import "./CategoryScreen.css";
import React from 'react';
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
// Components
import Product from "../components/Product";
//Actions
import {getProducts as listProducts} from '../redux/actions/productActions';


const CategoryScreen4 = () => {

  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const filteredProducts = products.filter(product => {
    return product.category === 'category_4';
  });

  console.log(filteredProducts)

  return (
    <div className="category">
      <h1 className="category-title">Category : category_4</h1>
      <div className="category-products">
        {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : filteredProducts.map(product => (
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


export { CategoryScreen4 };
