import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>; // Will be compiled by Babel as React.createElement
console.log(element);
ReactDOM.render(element, document.getElementById("root"));
