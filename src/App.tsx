import React from 'react';
import './App.css';

import Home from './components/Home'
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App">
      <SideNav />
      <Home />
    </div>
  );
}

export default App;
