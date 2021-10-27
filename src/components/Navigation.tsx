import { NavLink, useHistory } from "react-router-dom";
import { useAuthentication } from "../context/AuthenticationContext";
import { logOut } from "../firebaseServices/authentication";
import logo from "assets/images/logo/BeelaLogonotext.png";
import Icon from "./Icon";
export default function Navigation() {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();
  const history = useHistory();

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
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/topics">Discover</NavLink>
          </li>
          <li>
            <NavLink to="/register" className={"btn btn-primary"}>
              Sign Up
            </NavLink>
          </li>
          {signToShow}
        </ul>
      </div>
      <hr />
    </nav>
  );
}
