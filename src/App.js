import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchPage from './components/SearchPage'
import SearchResult from "./components/SearchResult";
import Property from "./components/Property";
import Details from "./components/Details";
import User from "./components/User";
import Host from "./components/Host";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

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
        
          <Routes>
            {/* <Route path="/search" element={<SearchPage />} />  */}
            <Route path="/search/:term" element={<SearchResult />} />
            <Route path="/property/" element={<Property />}/>
            <Route path="/properties/:id" element={<Details />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/host/:id" element={<Host />} />
            <Route path="/" element={<Home />} />                    
            <Route path="/users/signup" element={<SignUp />} />    
            <Route path="/users/signin" element={<SignIn />} />          
          </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App