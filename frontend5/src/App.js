import logo from './logo.svg';
import './App.css'; 


import {Header, Footer} from "./Container/Header"; 
import Nav from "./Container/Nav";
function App() {
  return (
    <div>  
      <Header name="Ethnus"></Header> 
      <Nav age="10" /> 
      <Nav age="20" />
      <Nav age="30" />
      <Nav age="40" />
      <Nav age="50" />
      <Nav age="60" />
      <Footer brand="Facebook" />

      
    </div>
  );
}

export default App;
