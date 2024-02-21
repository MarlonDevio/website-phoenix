import "./styles/App.css";
import { NavigationBar } from "./components";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { Home } from "./pages";

function App() {
  return (
    <ThemeProvider>
      <NavigationBar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
