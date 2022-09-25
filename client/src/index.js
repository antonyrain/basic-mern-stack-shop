import "./index.css";
import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";


const container = document.getElementById("root");
// Create a root.
const root = ReactDOMClient.createRoot(container);
// Initial render: Render an element to the root.
root.render(
<Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>,
);


reportWebVitals();
