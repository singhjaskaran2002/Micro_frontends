import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByID } from './ApiServer';
import './Checkout.css';

function Checkout() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductByID(id).then(setProduct);
    }, []);

    return (
        <>
            {product && (
                <div className="product-details">
                    <div className="row">
                        <div className="col-6">
                            <img
                                className="card-image"
                                src={product.image}
                                alt={product.name}
                            />
                        </div>
                        <div className="col-6">
                            <h1>{product.name}</h1>
                            <h5 style={{ textAlign: 'justify' }}>
                                {product.description}
                            </h5>
                            <h3
                                style={{
                                    marginTop: '100px',
                                    marginBottom: '40px',
                                }}
                            >
                                ₹
                                {Intl.NumberFormat('en-IN').format(
                                    product.price,
                                )}
                            </h3>
                            <button
                                onClick={(e) => {
                                    alert('SUCCESS');
                                }}
                                className="btn btn-primary btn-lg"
                            >
                                BUY PRODUCT
                            </button>
                        </div>
                    </div>
                    {/* <div className="card" style={{ width: '400px' }}>
                        <img
                            src={product.image}
                            className="card-img-top"
                            alt={product.name}
                        />
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="card-text">{product.description}</p>
                            <button className="btn btn-primary">BUY ITEM</button>
                        </div>
                    </div> */}
                </div>
            )}
        </>
    );
}

export default Checkout;
