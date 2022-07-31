import "./App.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { Home } from "./component/Home";
import { About } from "./component/About";
function App() {
  return (
    <>
     <BrowserRouter>
        <Navbar />
        <div>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  
  );
}

export default App;
