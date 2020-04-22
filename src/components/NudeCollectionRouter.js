import React from "react";

import { Route, Switch } from "react-router-dom";

import NudeCollection from "./NudeCollection";
import ProductDetail from "./ProductDetail";

function NudeCollectionRouter() {
    return (
        <Switch>
            <Route exact path="/nude-kolekce" component={NudeCollection} />
            <Route path="/nude-kolekce/:id" component={ProductDetail} />
        </Switch>
    )
}

export default NudeCollectionRouter;