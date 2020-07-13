import React from 'react';
import pokemons from './data';
import Pokedex from './pokedex'
import './App.css';

function App() {
  return (
    <div className="App">
      {pokemons.map((pokemon) => <Pokedex pokemon={pokemon} />)}
    </div>
  );
}

export default App;
