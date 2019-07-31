import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "./index.scss";
import { Routes } from "./assets/routes";
import App from "./containers/app";

const history = createBrowserHistory();
const store = configureStore({}, history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path={Routes.Root} component={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app")
);
