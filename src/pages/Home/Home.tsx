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
      <Parallax type='' />
      <About />
      <Mission />
      <Parallax type='services' />
      <Portfolio />
      <Portfolio />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
