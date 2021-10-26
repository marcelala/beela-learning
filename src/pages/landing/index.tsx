import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main id={"landing"}>
      <section id={"hero"}>
        <h1>Beela Learning</h1>
        <h2> Explore the tech industry with us to find your path</h2>
        <Link to={"/register"}>Sign up now</Link>
      </section>
      <section id={"about"}>
        <h2>Learn a skill</h2>
        <h2>Build your portfolio</h2>
        <h1>Get hired</h1>
        <p>
          {" "}
          Beela Learning is an online education platform that delivers resources
          to immigrant women aspiring to start or boost their careers in tech.
          Our content ranges from Web development, UI/UX design, Project
          Management, Backend and Frontend Software Engineering and more. Join
          our hive today!
        </p>
        <Link to={"/topics"}>Discover</Link>
      </section>
      <section id={"testmonials"}>
        <h2>Success stories from our bees in Sweden</h2>
        <p>content</p>
      </section>
      <section id={"numbers"}>
        <ul>
          <li>registered students, students helped, site visits</li>{" "}
        </ul>
      </section>
      <section id={"newsletter"}>
        <h3>Subscribe to our newsletter</h3>
        <p> Get the latest update, news and tips.</p>
        <span>Field and button</span>
        <button className="mu-subscribe-btn">
          <a href="https://beela.us1.list-manage.com/subscribe/post?u=ec3f144b4e769635dffef5601&amp;id=92a05c0895">
            Subscribe
          </a>
        </button>
      </section>
    </main>
  );
}
