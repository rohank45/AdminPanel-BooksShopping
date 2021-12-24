import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Login from "./Login";
import Books from "./Books";
import Payments from "./Payments";
import ErrorPage from "./ErrorPage";
import UsersData from "./UsersData";
import Home from "./Home";
import OrderDetails from "./OrderDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/users" exact component={UsersData} />
        <Route path="/user/orders" exact component={OrderDetails} />
        <Route path="/books" exact component={Books} />
        <Route path="/payments" exact component={Payments} />
        {/* <Route path="*" component={ErrorPage} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
