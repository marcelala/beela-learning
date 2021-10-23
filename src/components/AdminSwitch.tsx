import { Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import AdminHome from "../pages/AdminHome";
import ParticipantsList from "../pages/ParticipantsList";
import Participant from "./Participant";

export default function AdminSwitch() {
  return (
    <>
      <AuthenticatedRoute exact path="/home" component={AdminHome} />
      <AuthenticatedRoute
        exact
        path="/participants"
        component={ParticipantsList}
      />
      <AuthenticatedRoute
        exact
        path="/participants/:id"
        component={Participant}
      />
    </>
  );
}
