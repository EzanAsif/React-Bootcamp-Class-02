import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './dinner'

function App() {
  return (
    <div className="App">
      <Dinner dishName = "Nihari" />
    </div>
  );
}

export default App;

// -------------------------
// ---  POINT TO REMEMBER --
//              ------------
// that you can only return one element but inside that one element
// you can have as many elements as you want but the return fn must 
// be returning only one element.