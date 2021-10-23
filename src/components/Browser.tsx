import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Navigation from "./Navigation";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Home from "../pages/Home";
import TopicsList from "../pages/TopicsList";

export default function Browser() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <AuthenticatedRoute exact path="/" component={Home} />
        <AuthenticatedRoute exact path="/topics" component={TopicsList} />
        <UnauthenticatedRoute exact path="/signup" component={Register} />
        <UnauthenticatedRoute exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
