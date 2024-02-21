import "./Home.css";
import { About, Contact, Hero, Mission, Portfolio } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Portfolio />
      <Mission />
      <Contact />
    </div>
  );
};

export default Home;
