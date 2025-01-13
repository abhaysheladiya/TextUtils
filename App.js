

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
{/*import { useState } from 'react'; */}

function App() {

  const [mode , setMode] =useState('light');
  const [alert, setAlert] =useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='gray';
      showAlert("Dark mode has been enable", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable", "success");
    }
  }
  return (
   <>

  <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-4">
  <TextForm heding="Enter a text to analyze" showAlert={showAlert} mode={mode}/>
  {/*<About/>*/}
  </div>

 </>
  )
}

export default App;
