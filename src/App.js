import React, { useState } from 'react';

import City from "./City"
import Menu from "./Menu"
import Load from "./Load"

import { api } from './City'

let city;

function App() {

  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({})
  const [choice, setChoice] = useState("menu")

  switch(choice) {
    case "weather":
      return (
        <City setWeather={setWeather} setQuery={setQuery} query={query} weather={weather} choice={setChoice}/>
      );

    case "menu": 
      return (
        <Menu setChoice={setChoice}/>
      ); 

    case "load":
      return (
        <Load setChoice={setChoice}/>
      )

    default:

    break;
  }

 
}

export default App;
