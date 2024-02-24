import {
  About,
  Contact,
  Hero,
  Mission,
  NavigationBar,
  Parallax,
  Portfolio,
} from "../../components";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <section className="heading__section">
        <NavigationBar />
        <Hero />
      </section>
      <About />
      <section>
        <Parallax type="services" />
      </section>
      <Mission />
      <section>
        <Parallax type="services" />
      </section>
      <Portfolio />
      <Portfolio />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
