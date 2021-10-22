import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Navigation from "./Navigation";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Home from "../pages/Home";

export default function Browser() {
  return (
    <BrowserRouter>
      <Navigation />

      <AuthenticatedRoute exact path="/" component={Home} />
      <UnauthenticatedRoute exact path="/signup" component={Register} />
      <UnauthenticatedRoute exact path="/login" component={Login} />
    </BrowserRouter>
  );
}
