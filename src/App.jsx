import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Credits from "./components/Credits";

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <Intro />
        <About />
        <Experience />
        <Projects />
      </main>
      <Credits />
    </>
  );
}

export default App;
