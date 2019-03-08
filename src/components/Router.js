import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Groups from "./Groups";
import MovieList from "./MovieList";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/groups/:userid" component={Groups}/>
            {/* <Route exact path="/groups/guest" component={Groups} /> */}
            <Route path="/groups/:userid/:groupid" component={MovieList}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
