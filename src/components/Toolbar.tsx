import { NavLink, useHistory } from "react-router-dom";
import Icon from "./Icon";
import { logOut } from "../firebaseServices/authentication";
import { useAuthentication } from "../context/AuthenticationContext";
export default function Toolbar() {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();
  const history = useHistory();
  const calendarLink =
    "https://calendar.google.com/calendar/embed?src=u32c1ks1g0q9nt7eljl2hlqqsg%40group.calendar.google.com&ctz=Europe%2FStockholm";
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <NavLink to="/home">
            <Icon fileName={"home"} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-topics/newTopic">
            <Icon fileName={"File"} />
            <span>Create a topic</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/topics">
            <Icon fileName={"list"} />
            <span>View topics</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/participants">
            <Icon fileName={"face-id"} />
            <span>View participants</span>
          </NavLink>
        </li>
        <li>
          <a href={calendarLink} target="_blank" rel="noreferrer">
            <Icon fileName={"calendar-simple"} />
            <span>Calendar</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
