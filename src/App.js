import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ArticleList />} />
      </Routes>
    </div>
  );
}

export default App;
