import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { type } from '@testing-library/user-event/dist/type'
// import { BrowserRouter, Route, Link } from "react-router-dom";


//  import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode(
        "dark"
      ); /* here set mode is a state that's why we dont write like "setMode ='dark'" */
      document.body.style.background = "#042743";
      showAlert("Dark mode has been enable", "success");
      document.title =
        "Tryappone - Dark Mode"; /* this line is use for change title during liveshare*/
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enable", "success");
      document.title = "Tryappone - Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title= "Tryapp" aboutText="About us"/>  */}

      {/* <Router>
        <Navbar title="Tryapp" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the Text to analyze below"
                mode={mode}
              />
            </Route>

        </div>
      </Router> */}

      <BrowserRouter>
        <Navbar title="Tryapp" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
      
          <Routes>

          <Route path={"/about"} element={<About mode={mode}/>} />

          <Route path={"/"} element={<TextForm showAlert={showAlert}
                heading="Tryappone - Word Counter | Character Counter | Lowercase to Uppercase | Uppercase to Lowercase | Remove Extra Spaces"
                mode={mode}/>} />

          </Routes>

        </div>
      </BrowserRouter>

      {/* <About/> */}
    </>
  );
}

export default App;

// we have to use exact for exact match while routing
// firsr you have to type this command before typing npm start      ---->   npm install react-router-dom before routing
