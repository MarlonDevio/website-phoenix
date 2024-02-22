import "./Home.scss";
import {
  About,
  Contact,
  Hero,
  Mission,
  Parallax,
  Portfolio,
} from "../../components";

const Home = () => {
  return (
    <main>
      <Hero />
      <Parallax />
      <About />
      <Mission />
      <Parallax />
      <Portfolio />
      <Portfolio />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Home;
