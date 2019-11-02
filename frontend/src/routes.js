import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import UserList from './pages/UserList';
import UserForm from './pages/UserForm';
import DemandList from './pages/DemandList';
import DemandForm from './pages/DemandForm';

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);



export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <PrivateRoute path="/main" component={Main} />
        <PrivateRoute path="/users" exact component={UserList} />
        <PrivateRoute path="/demands" exact component={DemandList} />
        <PrivateRoute path="/demands/create" component={DemandForm} />
        <PrivateRoute path="/demands/edit/:id" component={DemandForm} />
        <PrivateRoute path="/users/create" component={UserForm} />
        <PrivateRoute path="/users/edit/:id" component={UserForm} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}