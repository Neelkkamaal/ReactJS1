import logo from './logo.svg'; 
import React from 'react';
import './App.css'; 
import UserTable from './UserTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserTable />
      </header>
    </div>
  );
}

export default App;
