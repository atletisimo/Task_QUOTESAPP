import React, { useState } from "react";
//import styled from "styled-components";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Quotes from "./components/Quotes";
import PopUp from "./components/PopUp";
const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [autor, setAutor] = useState([]);
  return (
    <div>
      <Router>
        <div className="link">
          <Link className="link1" to="/">
            Quotes
          </Link>
          <Link className="link2" to="/popUp">
            Open the Pop up
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Quotes quotes={quotes} />} />
          <Route
            path="/popUp"
            element={<PopUp setQuote={setQuotes} quote={quotes} />}
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
