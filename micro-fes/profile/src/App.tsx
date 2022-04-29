import Footer from "home/Footer";
import Header from "home/Header";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./index.css";


const App = () => (
  <div className="container">
    <Header name="Profile" />
    <div className="main">This is profile</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
