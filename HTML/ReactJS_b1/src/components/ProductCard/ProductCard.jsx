import React from "react";

import '../ProductCard/ProductCard.css';
const ProductCard = ({image, name, price}) =>{
    return (
        <div className="product-card" >
            <div className="product-image-wrapper">
                <img src={image} alt="name" className="product-image" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">
                    {price.toLocaleString('vi-VN')} đ
                </p>
            </div>
            <button className="add-to-cart-btn">
                Add cart
            </button>
        </div>
    );
}
export default ProductCard;