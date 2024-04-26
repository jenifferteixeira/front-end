import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './containers/Home/index';
import Order from './containers/Order/index';


function Routes() {
    return (

        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/orders" component={Order} />
            </Switch>
        </Router>
    )
}
export default Routes