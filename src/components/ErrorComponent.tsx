import { Link } from "react-router-dom";

export const ErrorComponent = (
  <p>
    Oops, something went wrong. Please return to the home page and try again{" "}
    <Link to="/home">Go home</Link>
  </p>
);
