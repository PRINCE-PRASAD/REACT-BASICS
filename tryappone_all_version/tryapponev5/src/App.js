import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
   <>
    {/* <Navbar title= "Tryapp" aboutText="About us"/>  */}

   <Navbar title= "Tryapp"/> 
   <div className="container">
   <TextForm heading="Enter the Text to analyze below"/>
   {/* <About/> */}
  </div>
   </>

  );
}

export default App;

