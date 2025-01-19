import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/";
import UserDetail from "./components/UserDetail/";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
