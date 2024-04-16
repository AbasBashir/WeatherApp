import React,{useState, useEffect} from 'react';
import Header from './Header';

function App() {

  const apiKey = 'cc3a69cee89d442bbef103435240904';
  const base_Url = 'https://api.weatherapi.com/v1'

  return (
    <>
      <div className="bg-gradient-to-br from-cyan-700 to-red-700 min-h-screen pt-50">
        <Header></Header>
      </div>
    </>
  )
}

export default App
