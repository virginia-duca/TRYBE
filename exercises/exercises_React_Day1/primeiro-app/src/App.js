import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (arrayItems.map(item => task(item)));
}

const task = (value) => {
  return (
    <li>{value}</li>
  )
}

const arrayItems = ['lavar roupa', 'fazer almoco', 'jogar Apex', 'Estudar']

export default App;
