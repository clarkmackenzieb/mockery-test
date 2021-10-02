import React from 'react';
import './App.css';
import Example1 from './example1/Example1';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Mocking UI with Kenzie</h1>
      </header>
      <div className="app-content">
        <div className="examples">
          <Example1/>
        </div>
      </div>
      {/* <footer className="app-footer">
        <div className="footer-side">here</div>
        <div className="footer-center">here</div>
        <div className="footer-side">here</div>
      </footer> */}
    </div>
  );
}

export default App;
