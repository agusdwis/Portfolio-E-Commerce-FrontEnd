import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../stores";

import HomePage from "../pages/HomePage";
import SignIn from "../pages/SigninPage";
import SignUp from "../pages/SignupPage";

import ProductPage from "../pages/ProductPage";
import ProductDetail from "../pages/ProductDetailPage";
import NotMatch from "../pages/NotMatch";
import Profile from "../pages/Profile";
import ProfileEdit from "../components/ProfileComp";
import CartsPage from "../pages/TransactionPage";

const MainRoutes = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={SignIn} />
                    <Route exact path="/register" component={SignUp} />
                    <Route exact path={'/profile'} component={Profile} />
                    <Route exact path={'/profile/edit'} component={ProfileEdit} />
                    <Route exact path="/book" component={ProductPage} />
                    <Route path="/book/:category" component={ProductPage} />
                    <Route exact path="/product/:id" component={ProductDetail} />
                    <Route exact path="/cart" component={CartsPage} />
                    <Route component={NotMatch} />
                </Switch>
            </BrowserRouter>
        </Provider>

    );
};

export default MainRoutes;
