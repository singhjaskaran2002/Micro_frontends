import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import store from './store';
import Navigation from './components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
    <>
        <Header />
        <div className="web-body">
            <Navigation />
        </div>
        <Footer />
    </>
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app'),
);
