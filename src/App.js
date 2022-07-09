import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Carhire from "./pages/Carhire";
import { SearchContext } from "./components/searchContext/SearchContext";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Routes>
        <SearchContext.Provider value={(value, setValue)}>
          <Route path="/" element={<Home />} />
          <Route path="/carhire" element={<Carhire />} />
          <Route path="*" element={<Home />} />
        </SearchContext.Provider>
      </Routes>
    </div>
  );
}

export default App;
