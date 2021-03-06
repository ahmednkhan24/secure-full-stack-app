import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";
import oktaAuthConfig from "./config/okta";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Content from "./components/Content";

const oktaAuth = new OktaAuth(oktaAuthConfig);

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Security oktaAuth={oktaAuth}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/implicit/callback" component={LoginCallback} />
            <SecureRoute exact path="/content" component={Content} />
          </Switch>
        </Security>
      </div>
    </BrowserRouter>
  );
};

export default App;
