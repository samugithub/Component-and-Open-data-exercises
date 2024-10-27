import React from 'react';

const OrderInfo = ({ product, quantity, total }) => {
    return (
        <div>
            <h2>Order Info</h2>
            {quantity > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product}</td>
                            <td>{quantity}</td>
                            <td>{total}€</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Please select a product and quantity.</p>
            )}
        </div>
    );
};

export default OrderInfo;