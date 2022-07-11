import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Carhire from "./pages/Carhire";
import { CarsContextProvider } from "./components/contexts/cars.context";

function App() {
  return (
    <div className="App">
      <Router>
        <CarsContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carhire" element={<Carhire />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </CarsContextProvider>
      </Router>
    </div>
  );
}

export default App;
