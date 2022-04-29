import React from "react";
import "./App.css";

type props = {
  name: string;
};

const Header: React.FC<props> = ({ name }) => {
  return <div className="main-div">Header | {name}</div>;
};

export default Header;
