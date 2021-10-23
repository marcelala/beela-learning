import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Navigation from "./Navigation";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Home from "../pages/Home";
import TopicsList from "../pages/TopicsList";
import AdminHome from "../pages/AdminHome";
import { useUserData } from "../context/UserDataContext";

export default function Browser() {
  const { userData } = useUserData();
  const HomePage = userData.userRole === "admin" ? AdminHome : Home;

  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <AuthenticatedRoute exact path="/home" component={HomePage} />
        <AuthenticatedRoute exact path="/ahome" component={AdminHome} />
        <AuthenticatedRoute exact path="/topics" component={TopicsList} />
        <UnauthenticatedRoute exact path="/signup" component={Register} />
        <UnauthenticatedRoute exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
