import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "./index.scss";
import { Routes } from "./assets/routes";
import App from "./containers/app";

export const history = createBrowserHistory();
export const store = configureStore({}, history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path={Routes.Root} component={App} />
                <Route path={Routes.Four_Oh_Four} render={() => <div>Not Found</div>} />
                <Redirect from={Routes.Anything} to={Routes.Four_Oh_Four} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app")
);
