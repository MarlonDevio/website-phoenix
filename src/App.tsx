import "./styles/App.css";
import { NavigationBar, PlaceHolder, Footer } from "./components";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { Home } from "./pages";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavigationBar />
        <PlaceHolder />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
