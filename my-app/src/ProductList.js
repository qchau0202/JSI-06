import React from "react";
import ProductItem from "./ProductItems";
import {products} from './mock/index'
function ProductList() {
    const eachItem = products.map((item,index)=> <ProductItem key = {index} productInfo = {item} /> ) // Important
  return (
    <section className="newProducts">
      <h1>News Products</h1>
      <div className="newProducts__container">
        {eachItem} 
      </div>
    </section>
  );
}

export default ProductList;