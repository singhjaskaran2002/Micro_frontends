import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductListing from './ProductListing';
import Checkout from "checkout/Checkout";

function Navigation() {
    return (
        <Switch>
            <Route exact path="/products" component={ProductListing} />
            <Route exact path="/checkout/:id" component={Checkout} />
            <Redirect from="/" to="/products" />
        </Switch>
    );
}

export default Navigation;
