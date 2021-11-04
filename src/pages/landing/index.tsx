import Hero from "./Hero";
import About from "./About";
import Testimonials from "./Testimonials";
import WhoAreWe from "./WhoAreWe";
import Newsletter from "./Newsletter";

export default function Landing() {
  return (
    <main id={"landing"}>
      <Hero />
      <About />
      <Testimonials />
      <WhoAreWe />
      <Newsletter />
    </main>
  );
}
