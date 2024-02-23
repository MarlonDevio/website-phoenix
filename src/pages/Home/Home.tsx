import {
  About,
  Contact,
  Hero,
  Mission,
  NavigationBar,
  Parallax,
  Portfolio
} from '../../components';
import './Home.scss';

const Home = () => {
  return (
    <>
      <section className='heading__section'>
        <NavigationBar />
        <Hero />
      </section>
      <main>
        <Parallax />
        <About />
        <Mission />
        <Parallax />
        <Portfolio />
        <Portfolio />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default Home;
