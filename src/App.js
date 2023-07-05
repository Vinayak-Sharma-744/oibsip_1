import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
