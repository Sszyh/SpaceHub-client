import React, { useState, useEffect } from "react";
import "./App.css";
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />

    {/* Home */}
      {/* Header */}

      {/* Banner */}

      {/* Cards */}

      {/* Footer */}

    {/* SearchPage */}
      {/* Header */}
      {/* ... */}

    </div>
  );
}

export default App