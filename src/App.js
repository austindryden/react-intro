// #1 you need to import React

import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './Greet';

// #2 you always define a function (or a class)
function App() {
  return (
    <div>
      <h1>heres some words</h1>
      <Greet whom="alice"/>
    </div>
  );
}

//#3 You always export that function (or class)
export default App;