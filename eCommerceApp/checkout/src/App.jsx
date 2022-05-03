import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './Checkout';
import './index.css';

const App = () => (
    <Router>
        <Switch>
            <Route path="/checkout/:id" component={Checkout} />
        </Switch>
    </Router>
);
ReactDOM.render(<App />, document.getElementById('app'));
