import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./core/Home";
import Signup from "./user/Signup";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/Profile";
import Signin from "./user/Signin";
import Cart from "./core/Cart";
import App from "./core/App";
import About from "./core/AboutUs";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" exact component={About} />
        <Route path="/shop" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/cart" exact component={Cart} />
        <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
