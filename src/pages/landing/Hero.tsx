import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id={"hero"}>
      <h1>Beela Learning</h1>
      <h2> Explore the tech industry with us to find your path</h2>
      <Link to={"/register"}>Sign up now</Link>
    </section>
  );
}
