import { Link } from "react-router-dom";
export default function About() {
  return (
    <section id={"about"}>
      <div className="text-box title">
        <h2>Learn a skill.</h2>
        <h2>Build your portfolio.</h2>
        <h1>Get hired</h1>
      </div>
      <p>
        Beela Learning is an online education platform that delivers resources
        to immigrant women an non-binary people aspiring to start or boost their
        careers in tech. Our content ranges from Web development, UI/UX design,
        Project Management, Backend and Frontend Software Engineering and more.
        Join our hive today!
      </p>
      <Link to={"/topics"}>Discover</Link>
    </section>
  );
}
