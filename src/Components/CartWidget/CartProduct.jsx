import React from "react";

const CartProduct = ({ producto }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0 align-items-center">
                <div className="col-4 col-md-4">
                    <img src={producto.img} className="img-fluid rounded-start" alt={producto.title} />
                </div>
                <div className="col-8 col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-text">Cantidad: {producto.quantity}</p>
                        <p className="card-text">Precio unitario: ${producto.price}</p>
                        <p className="card-text"><strong>Total: ${producto.quantity * producto.price}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;