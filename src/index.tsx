import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import App from "./containers/app";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
