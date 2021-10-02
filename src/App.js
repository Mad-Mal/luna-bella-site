//Imports
import React from 'react';
import Head from './components/Head';
import NavBar from './components/NavBar';

//Imports - Styles
import './App.css';

function App() {
  return (
    <div className="app-outer-wrap">
      <div className="app-inner-wrap">
        <Head />
        <NavBar />
      </div>
    </div>
  );
}

export default App;
