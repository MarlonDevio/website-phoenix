import {
  About,
  Contact,
  Hero,
  Mission,
  NavigationBar,
  // Parallax,
  Portfolio,
  Services,
} from "../../components";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <section className="heading__section">
        <NavigationBar />
        <Hero />
      </section>
      <section className="section--about__me">
        <About />
      </section>
      <section className="section--services">
        <Services />
      </section>
      {/* <section>
        <Parallax type="services" />
      </section> */}
      <section className="section--mission">
        <Mission />
      </section>
      {/* <section>
        <Parallax type="services" />
      </section> */}
      <section className="section--portfolio">
        <Portfolio />
      </section>
      <section className="section--contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
