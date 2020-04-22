import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import NudeCollectionRouter from "./NudeCollectionRouter";
import WooLimitedEditionRouter from "./WooLimitedEditionRouter";
import ShoppingCart from "./ShoppingCart";



function Main() {
    return (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/nude-kolekce' component={NudeCollectionRouter}/>
        <Route path='/woo-limitky' component={WooLimitedEditionRouter}/>
        <Route path="/kosik" component={ShoppingCart}/>     
    </Switch>
    )
}

export default Main;