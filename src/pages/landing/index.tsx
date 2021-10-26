import About from "./About";
import Testimonials from "./Testimonials";
import Hero from "./Hero";
import Numbers from "./Numbers";
import Newsletter from "./Newsletter";

export default function Landing() {
  return (
    <main id={"landing"}>
      <Hero />
      <About />
      <Testimonials />
      <Numbers />
      <Newsletter />
    </main>
  );
}
