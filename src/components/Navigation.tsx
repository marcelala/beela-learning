import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>|<NavLink to="login">Login</NavLink>|
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/topics">Topics</NavLink>
    </nav>
  );
}
