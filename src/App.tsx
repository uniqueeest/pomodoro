import React from 'react';
import './App.css';

import Timer from "./components/Timer";
import LifeQuote from './components/LifeQuote';

function App() {
  return (
    <div className="App">
      <Timer />
      <LifeQuote />
    </div>
  );
}

export default App;
