import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
