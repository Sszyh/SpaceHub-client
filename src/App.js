import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchPage from './components/SearchPage'
import SearchResult from "./components/SearchResult";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="app">
      <Router>
        
        <Header />
          <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/" element={<Home />} />  
            <Route path="/search/:term" element={<SearchResult />} />                   
          </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App