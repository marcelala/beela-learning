import { Link } from "react-router-dom";
import nuts from "../../assets/images/nuts.png";

export default function Page404() {
  return (
    <section className="pageNotFound">
      <img src={nuts} alt="assorted nuts" />
      <div className="text-box">
        <h1>Ah, nuts!</h1>
        <p>
          We were unable to find the page you were looking for, but we'll get
          cracking on the problem.
        </p>

        <Link to={"/"} className={"btn btn-primary"}>
          Go Home
        </Link>
      </div>
    </section>
  );
}
