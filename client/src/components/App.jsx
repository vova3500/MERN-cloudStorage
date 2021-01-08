import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Registration from "./registration/Registration";
import Login from "./login/Login";

import "./app.css";
import Disk from "./disk/Disk";

const App = () => {
  const isAuth = useSelector(({ user }) => user.isAuth);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar isAuth={isAuth} />

        {!isAuth ? (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Redirect to="/login" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Disk} />
            <Route path="/registration" component={Registration} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
