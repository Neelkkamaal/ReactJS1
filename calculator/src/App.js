import logo from './logo.svg';
import React from "react";
import Calculator from "./Components/Calculator"; 
import Display from "./Components/Display";
import Keypad from "./Components/Keypad";
import "./Styles.css"; 

function App() {
  return (
    <div className="App">
      <Calculator /> 
      <Display />
      <Keypad />
    </div>
  );
}

export default App;