import "./styles/App.scss";
import { Home } from "./pages";
import { NavigationBar } from "./components";

function App() {
  return (
    <>
      <section>
        <NavigationBar />
      </section>
      <Home />
    </>
  );
}

export default App;
