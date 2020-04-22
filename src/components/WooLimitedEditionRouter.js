import React from "react";

import { Route, Switch } from "react-router-dom";

import WooLimitedEdition from "./WooLimitedEdition";
import ProductDetail from "./ProductDetail";

function WooLimitedEditionRouter() {
    return (
        <Switch>
            <Route exact path="/woo-limitky" component={WooLimitedEdition} />
            <Route path="/woo-limitky/:id" component={ProductDetail} />
        </Switch>
    )
}

export default WooLimitedEditionRouter;