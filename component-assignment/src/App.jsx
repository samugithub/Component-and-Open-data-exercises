import React, { useState } from 'react';
import Header from './Header';
import ProductForm from './ProductForm';
import OrderInfo from './OrderInfo';
import image from './assets/RYZEN.png';
import './App.css';

const App = () => {
    const [quantity, setQuantity] = useState(0);
    const [selectedProductIndex, setSelectedProductIndex] = useState(0);

    const products = [
        { name: 'AMD Ryzen 5 3600', price: 245 },
        { name: 'AMD Ryzen 5 5600X', price: 140 },
        { name: 'AMD Ryzen 7 3700X', price: 300 },
    ];

    const selectedProduct = products[selectedProductIndex];

    return (
        <div>
            <Header imageProp={image} title="Welcome to the product page!" />
            <ProductForm
                products={products}
                onProductChange={setSelectedProductIndex}
                onQuantityChange={setQuantity}
                quantity={quantity}
            />
            <OrderInfo
                product={selectedProduct.name}
                quantity={quantity}
                total={selectedProduct.price * quantity}
            />
        </div>
    );
};

export default App;