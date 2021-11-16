import ScrollToTop from "../components/ScrollToTop";
import { Switch } from "react-router-dom";
import Landing from "../pages/landing";
import TopicsList from "../pages/topicsList";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Topic from "../pages/topic";
import { useUserData } from "../context/UserDataContext";
import AdminHome from "../pages/adminHome";
import Home from "../pages/home";
import ParticipantsList from "../pages/participantsList";
import AdminTopicEditor from "../pages/adminTopicEditor";
import AdminAddResources from "../pages/adminAddResources";
import Page404 from "../pages/404/Page404";

export default function AuthenticatedSwitch() {
  const { userData } = useUserData();
  const admin = userData.userRole === "admin";
  const HomePage = admin ? AdminHome : Home;

  return (
    <Switch>
      <ScrollToTop>
        <AuthenticatedRoute exact path="/" component={Landing} />
        <AuthenticatedRoute path="/home" component={HomePage} />
        <AuthenticatedRoute exact path="/topics" component={TopicsList} />
        <AuthenticatedRoute exact path="/topics/:id" component={Topic} />
        {admin && (
          <AuthenticatedRoute
            exact
            path="/participants"
            component={ParticipantsList}
          />
        )}
        <AuthenticatedRoute
          exact
          path="/admin-topics/:id"
          component={AdminTopicEditor}
        />
        <AuthenticatedRoute
          exact
          path="/admin-topics/:id/:type"
          component={AdminAddResources}
        />
        <AuthenticatedRoute path="/404" component={Page404} />
      </ScrollToTop>
    </Switch>
  );
}
