import { BrowserRouter, Switch } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Navigation from "./Navigation";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Home from "../pages/Home";
import TopicsList from "../pages/TopicsList";
import Topic from "../pages/Topic";
import AdminHome from "../pages/AdminHome";
import { useUserData } from "../context/UserDataContext";
import ParticipantsList from "../pages/ParticipantsList";
import Participant from "./Participant";
import Footer from "./Footer";

export default function Browser() {
  const { userData } = useUserData();
  const admin = userData.userRole === "admin";
  const HomePage = admin ? AdminHome : Home;
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <AuthenticatedRoute exact path="/home" component={HomePage} />
        <UnauthenticatedRoute exact path="/signup" component={Register} />
        <UnauthenticatedRoute exact path="/login" component={Login} />
        <AuthenticatedRoute exact path="/topics" component={TopicsList} />
        <AuthenticatedRoute exact path="/topics/:id" component={Topic} />
        <AuthenticatedRoute
          exact
          path="/participants"
          component={ParticipantsList}
        />
        <AuthenticatedRoute path="/participants/:id" component={Participant} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
