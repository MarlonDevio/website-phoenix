import './styles/helpers.css';
import './styles/App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AboutSection from './components/AboutSection/AboutSection';
import HeroSection from './components/HeroSection/HeroSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import InspirationalSection from './components/InspirationalSection/InspirationalSection';
import ContactSection from './components/ContactSection/ContactSection';

function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <InspirationalSection />
      <ContactSection />
    </>
  );
}

export default App;
