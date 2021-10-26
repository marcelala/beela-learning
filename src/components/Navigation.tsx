import { NavLink, useHistory } from "react-router-dom";
import { useAuthentication } from "../context/AuthenticationContext";
import { logOut } from "../firebaseServices/authentication";
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
      <NavLink to="/home">Home</NavLink>|<NavLink to="login">Login</NavLink>|
      <NavLink to="/register">Sign Up</NavLink>
      <NavLink to="/recovery">Password recovery</NavLink>
      <NavLink to="/topics">Browse</NavLink>
      {isAuthenticated ? <button onClick={onLogout}> Sign out</button> : ""}
      <button> Calendar</button>
    </nav>
  );
}
