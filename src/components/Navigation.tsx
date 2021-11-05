import { NavLink, useHistory } from "react-router-dom";
import { useAuthentication } from "../context/AuthenticationContext";
import { logOut } from "../firebaseServices/authentication";
import logo from "assets/images/logo/logo.png";
import Icon from "./Icon";
export default function Navigation() {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();
  const history = useHistory();
  const calendarLink =
    "https://calendar.google.com/calendar/embed?src=u32c1ks1g0q9nt7eljl2hlqqsg%40group.calendar.google.com&ctz=Europe%2FStockholm";

  const signIn = (
    <li>
      <NavLink to="login">
        <Icon fileName={"sign-in"} />
      </NavLink>
    </li>
  );
  const signOut = (
    <li onClick={onLogout}>
      <Icon fileName={"sign-out"} />
    </li>
  );
  const signToShow = isAuthenticated ? signOut : signIn;

  // Methods
  async function onLogout() {
    const account = await logOut();
    setIsAuthenticated(false);
    history.push("/");
  }
  return (
    <nav className="navigation">
      <div className={"nav-content"}>
        <ul>
          <li>
            <NavLink to="/">
              <img src={logo} alt="bee in a beehive" />
            </NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <a href="/#about">Why Beela?</a>
            </li>
          )}
          <li>
            <NavLink to="/topics">Discover</NavLink>
          </li>
          {!isAuthenticated && (
            <li>
              <NavLink to="/register" className={"btn btn-primary"}>
                Sign Up
              </NavLink>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <a href={calendarLink} target="_blank" rel="noreferrer">
                <Icon fileName={"calendar-number"} />
              </a>
            </li>
          )}
          {signToShow}
        </ul>
      </div>
      <hr />
    </nav>
  );
}
