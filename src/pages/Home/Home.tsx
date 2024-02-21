import "./Home.css";
import { About, Hero, Mission, Portfolio } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Portfolio />
      <Mission />
    </div>
  );
};

export default Home;
