import React from "react";
const ProductItem = (props) => {
    let info = props.productInfo
  return (
    <div className="newProducts__item">
      <div className="item__image">
        <img src= {info.image} alt="p6" />
        <div className="item__image-child">
          <img src= {info.image} alt="p5" />
        </div>
      </div>
      <div className="item__content">
        <h3>{info.productName}</h3>
        <p>
          <strong>XL/XXL/S</strong>
        </p>
        <div className="item__text">
          <p>
            <del>{info.oldPrice}</del>
          </p>
          <p>
            <strong>{info.newPrice}</strong>
          </p>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;