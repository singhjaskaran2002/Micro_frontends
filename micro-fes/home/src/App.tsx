import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";

import "./index.css";

const App = () => (
  <div className="container">
    <Header name="Home" />
    <div className="home">This is home</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
