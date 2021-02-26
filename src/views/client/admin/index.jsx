import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import { ToastProvider } from 'react-toast-notifications';
import store from "../Redux/store";
import "perfect-scrollbar/css/perfect-scrollbar.css";

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider
    autoDismiss
    autoDismissTimeout={6000}
    placement="bottom-center"
    >
    <App />
    </ToastProvider>
  </Provider>,
  document.getElementById("root")
);
