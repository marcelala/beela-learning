import { NavLink, useHistory } from "react-router-dom";
import { useAuthentication } from "../context/AuthenticationContext";
import { logOut } from "../firebaseServices/authentication";
import logo from "assets/images/logo/beelaLogo.png";
export default function Navigation() {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();
  const history = useHistory();

  // Methods
  async function onLogout() {
    const account = await logOut();
    console.log("Nav.jsx account", account);
    setIsAuthenticated(false);
    history.push("/login");
  }
  return (
    <nav>
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
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/topics">Browse</NavLink>
          </li>
          {isAuthenticated ? (
            <li>
              {" "}
              <button onClick={onLogout}> Sign out</button>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <hr />
    </nav>
  );
}
