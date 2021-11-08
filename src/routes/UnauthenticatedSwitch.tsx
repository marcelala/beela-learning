import { Redirect, Switch } from "react-router-dom";
import Landing from "../pages/landing";
import TopicsList from "../pages/topicsList";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Register from "../pages/register";
import Login from "../pages/login";
import PasswordRecovery from "../pages/passwordRecovery";
import Page404 from "../pages/404/Page404";
import ScrollToTop from "../components/ScrollToTop";

export default function UnauthenticatedSwitch() {
  return (
    <Switch>
      <ScrollToTop>
        <UnauthenticatedRoute exact path="/" component={Landing} />
        <UnauthenticatedRoute exact path="/topics" component={TopicsList} />
        <UnauthenticatedRoute path="/register" component={Register} />
        <UnauthenticatedRoute path="/login" component={Login} />
        <UnauthenticatedRoute path="/recovery" component={PasswordRecovery} />
        <UnauthenticatedRoute path="/404" component={Page404} />
      </ScrollToTop>
    </Switch>
  );
}
