import React from 'react';
import Header from './components/Header';
import Receipt from './components/Receipt';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Receipt />
      </div>
    </div>
  );
}

export default App;
