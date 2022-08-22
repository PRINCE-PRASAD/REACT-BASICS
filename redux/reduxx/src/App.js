// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes> */}
          <div className="App">
            <Navbar />
            <div className="container">
              <Shop />
            </div>
          </div>
        {/* </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
