import { Link } from "react-router-dom";
import heroImg from "assets/images/sections/mentoring.jpg";

export default function Hero() {
  return (
    <section id={"hero"}>
      <img className="background" src={heroImg} alt="background" />
      <div className="text-box">
        <h1>Beela Learning</h1>
        <h2> Explore the tech industry with us to find your path</h2>
        <Link to="/register" className="btn-secondary">
          Sign up now
        </Link>
      </div>
    </section>
  );
}
