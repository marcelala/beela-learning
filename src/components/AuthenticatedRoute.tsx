import { useAuthentication } from "../context/AuthenticationContext";
import { Redirect, Route } from "react-router-dom";

// @ts-ignore
export default function AuthenticatedRoute({ component: C, ...props }) {
  const { isAuthenticated } = useAuthentication();
  return (
    <Route
      {...props}
      render={(routeProps) =>
        isAuthenticated ? (
          <C {...routeProps} />
        ) : (
          (alert("Sorry! You need to log in to access this page"),
          (<Redirect to="/" />))
        )
      }
    />
  );
}
