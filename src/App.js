import React from 'react';
import './App.css';
import Header from './components/header';
import Overview from './components/overview'
import Statewise from './components/statewise'

function App() {
  return (
    <div className="App">
      <h1 className="massive-watermark">COVID-19</h1>
      <h1 className="massive-watermark-bottom">INDIA</h1>
      <Header/>
      <div className="container content">
        <div className="row">
          <Overview />
          <Statewise />
        </div>
      </div>
    </div>
  );
}

export default App;
