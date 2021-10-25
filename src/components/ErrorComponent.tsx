import { Link } from "react-router-dom";

export default function ErrorComponent() {
  return (
    <div>
      <p>
        Oops, something went wrong. Please return to the home page and try again{" "}
        <Link to="/home">Go home</Link>
      </p>
    </div>
  );
}
