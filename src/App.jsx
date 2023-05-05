import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import PageNotFound from "./components/PageNotFound";
import MovieDetails from "./components/MovieDetails";
import "./css/App.scss";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        {/* <Route path="*" element={PageNotFound} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
