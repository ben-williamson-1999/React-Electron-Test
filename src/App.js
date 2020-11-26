import React from 'react';
import logo from './logo.svg';
import './App.css';
import PopupButton from './components/OptionButton';

function App() {
  return (
    <div className="App">
      <header>
        <h2>FreeShell</h2>
      </header>
      <body>
        <PopupButton>Test</PopupButton>
      </body>
    </div>
  );
}

export default App;
