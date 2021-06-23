import { StrictMode } from "react";
import ReactDOM from "react-dom";

import RoutesManger from "./routes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <RoutesManger />
  </StrictMode>,
  rootElement
);
