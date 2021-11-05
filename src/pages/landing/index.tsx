import Hero from "./Hero";
import About from "./About";
import WhoAreWe from "./WhoAreWe";
import Newsletter from "./Newsletter";

export default function Landing() {
  return (
    <main id={"landing"}>
      <Hero />
      <About />
      <WhoAreWe />
      <Newsletter />
    </main>
  );
}
