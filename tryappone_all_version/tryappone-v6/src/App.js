import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from "react";
import Alert from './components/Alert';
import { type } from '@testing-library/user-event/dist/type'



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
   }

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode ('dark');   /* here set mode is a state that's why we dont write like "setMode ='dark'" */
      document.body.style.background = '#042743';
      showAlert("Dark mode has been enable","success");
      document.title = 'Tryappone - Dark Mode'; /* this line is use for change title during liveshare*/
    }
  
  else{
    setMode ('light');
    document.body.style.background = 'white';
    showAlert("Light mode has been enable","success");
    document.title = 'Tryappone - Light Mode';
  }
}
  return (
   <>
    {/* <Navbar title= "Tryapp" aboutText="About us"/>  */}

   <Navbar title= "Tryapp" mode ={mode} toggleMode={toggleMode}/> 
   <Alert alert={alert}/>
   <div className="container">
   <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode ={mode}/>
   {/* <About/> */}
  </div>
   </>

  );
}

export default App;


