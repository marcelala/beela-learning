import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Navigation from "./Navigation";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Home from "../pages/home";
import TopicsList from "../pages/topicsList";
import Topic from "../pages/topic";
import AdminHome from "../pages/adminHome";
import { useUserData } from "../context/UserDataContext";
import ParticipantsList from "../pages/participantsList";
import Participant from "./Participant";
import Footer from "./Footer";
import AdminTopicEditor from "../pages/adminTopicEditor";
import AdminTopic from "../pages/adminTopic";
import PasswordRecovery from "../pages/passwordRecovery";
import Landing from "../pages/landing";
import Toolbar from "./Toolbar";

export default function Browser() {
  const { userData } = useUserData();
  const admin = userData.userRole === "admin";
  const HomePage = admin ? AdminHome : Home;
  const TopicPage = admin ? AdminTopic : Topic;

  return (
    <BrowserRouter>
      <Navigation />
      <Toolbar />
      <Switch>
        <div className="content">
          <Route exact path="/" component={Landing} />
          <UnauthenticatedRoute path="/register" component={Register} />
          <UnauthenticatedRoute path="/login" component={Login} />
          <UnauthenticatedRoute path="/recovery" component={PasswordRecovery} />
          <AuthenticatedRoute exact path="/home" component={HomePage} />
          <Route exact path="/topics" component={TopicsList} />
          <AuthenticatedRoute exact path="/topics/:id" component={TopicPage} />
          <AuthenticatedRoute
            exact
            path="/participants"
            component={ParticipantsList}
          />
          <AuthenticatedRoute
            path="/admin-topics/:id"
            component={AdminTopicEditor}
          />
          <AuthenticatedRoute
            path="/participants/:id"
            component={Participant}
          />
        </div>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
