import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";
import Project from "./components/Projects/Project";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Resume />
      <Project />
    </div>
  );
}

export default App;
