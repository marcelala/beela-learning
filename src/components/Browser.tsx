import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
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
import PasswordRecovery from "../pages/passwordRecovery";
import Landing from "../pages/landing";
import AdminAddResources from "../pages/adminAddResources";
import ScrollToTop from "./ScrollToTop";
import Page404 from "../pages/404/Page404";

// This component is too long -1
/**
 * A quick detail about the private routes.
 * to make this component smaller, you could have create 4 types of private routes:
 * 1. standard routes like: <Route exact path="/" component={Landing} />
 * 2. un logged routes like: <UnauthenticatedRoute path="/register" component={Register} />
 * 3. teacher routes <TeacherRoute path="participants"/>
 * 4. student routers <StudentRoute path="topics"/> (or something that only students see)
 */
export default function Browser() {
  const { userData } = useUserData();
  const admin = userData.userRole === "admin";
  const HomePage = admin ? AdminHome : Home;
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        {/* Good use of private routes! */}
        <ScrollToTop>
          <Route exact path="/" component={Landing} />
          <Route exact path="/topics" component={TopicsList} />

          <UnauthenticatedRoute path="/register" component={Register} />
          <UnauthenticatedRoute path="/login" component={Login} />
          <UnauthenticatedRoute path="/recovery" component={PasswordRecovery} />

          <AuthenticatedRoute exact path="/home" component={HomePage} />
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
          <AuthenticatedRoute
            path="/participants/:id"
            component={Participant}
          />
          <Route path="/404" component={Page404} />
          <Redirect to={"/404"} />
        </ScrollToTop>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
