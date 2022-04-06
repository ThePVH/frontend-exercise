import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
