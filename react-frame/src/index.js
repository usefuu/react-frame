import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import Routers from "./router";

ReactDOM.render(<Routers />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
