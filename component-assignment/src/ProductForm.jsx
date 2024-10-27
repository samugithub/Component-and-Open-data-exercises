import React, { useState } from 'react';

const ProductForm = ({ products, onProductChange, onQuantityChange, quantity }) => {
    const handleSelectChange = (e) => {
        onProductChange(parseInt(e.target.value));
    };

    const increaseQuantity = () => {
        onQuantityChange(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            onQuantityChange(quantity - 1);
        }
    };

    return (
        <div>
            <label>
                Product:
                <select onChange={handleSelectChange}>
                    {products.map((product, index) => (
                        <option key={index} value={index}>
                            {product.name} ({product.price}€)
                        </option>
                    ))}
                </select>
            </label>
            <div>
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
            </div>
        </div>
    );
};

export default ProductForm;