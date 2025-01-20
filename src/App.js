import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/";
import UserDetail from "./components/UserDetail/";
import ThemeContext from "./context/themeContext";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(true);
  const changeTheme = () => {
    setTheme(!theme);
  }
  return (
    <Router>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/user/:id" element={<UserDetail />} />
        </Routes>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
