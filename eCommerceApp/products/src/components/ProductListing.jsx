import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getProducts } from './ApiServer';
// import Shared from 'checkout/Shared';

function ProductListing() {
    const [products, setProducts] = useState([]);

    const history = useHistory();

    useEffect(() => {
        getProducts().then(setProducts);
    }, [getProducts]);

    const checkout = (id) => {
        history.push(`/checkout/${id}`);
    };

    return (
        <>
            {products.map((item, index) => (
                <div key={index} className="product-div">
                    <div className="row">
                        <div className="col-4 product-image">
                            <img src={item.image} />
                        </div>
                        <div className="col-8">
                            <h2>{item.name}</h2>
                            {/* <Shared message="Rendered" /> */}
                            <p>{item.description}</p>
                            <div className="row">
                                <h4
                                    className="col-9"
                                    style={{ marginTop: '40px' }}
                                >
                                    ₹
                                    {Intl.NumberFormat('en-IN').format(
                                        item.price,
                                    )}
                                </h4>
                                <button
                                    onClick={(e) => checkout(item.id)}
                                    className="checkout-btn btn btn-sm btn-primary col-3"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProductListing;
