import React, { useState } from 'react';

import Clouds from './assets/clouds.png'
import Sun from './assets/sun.png'
import Rain from './assets/rain.png'
import Snowflake from './assets/snowflake.png'
import Storm from './assets/storm.png'
import WhiteClouds from './assets/white_clouds.png'
import SunWithClouds from './assets/sunWithClouds.png'
import Mist from './assets/mist.png'

let loading = false

const api = {
  key: "370248df3fb186475695c929ed25a2fd",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({})

  const search = evt => {
    if(evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(data => {
        setWeather(data)
        setQuery('')
        // console.log(data)
        loading = false

      })
    }
  }

  const data = [
    {
      id: 1,
      en: "Snow",
      pl: "Śnieg",
      img: Snowflake,
      bgc: {
        background: "linear-gradient(120deg, rgba(23,200,255,1) 0%, rgba(12,54,193,1)100%)"
      },
    },

    {
      id: 2,
      en: "Clouds", 
      pl: "Zachmurzone",
      img: Clouds,
      bgc: {
        background: "linear-gradient(120deg, rgba(174,169,169) 0%, rgba(0,0,0,1)100%)"
      },
    },

    {
      id: 3,
      en: "broken clouds",
      pl: "Załamanie pogody",
      img: Clouds,
      bgc: {
        background: "linear-gradient(120deg, rgba(0,0,0,1) 0%, rgba(174,169,169,1)100%)"
      },
    },

    {
      id: 4,
      en: "Sun",
      pl: "Słonecznie",
      img: Sun,
      bgc: {
        background: "linear-gradient(120deg, rgba(214,193,0,1) 0%, rgba(213,42,36,1)100%)"
      },
    },

    {
      id: 5,
      en: "clear sky",
      pl: "Bezchmurnie",
      img: Sun,
      bgc: {
        background: "linear-gradient(120deg, rgba(214,193,0,1) 0%, rgba(213,42,36,1)100%)"
      },
    },

    {
      id: 6,
      en: "Rain", 
      pl: "Deszcz",
      img: Rain,
      bgc: {
        background: "linear-gradient(120deg, rgba(34,139,167,1) 0%, rgba(30,29,32,1)100%)"
      },
    },

    {
      id: 7,
      en: "shower rain",
      pl: "Deszcz",
      img: Rain,
      bgc: {
        background: "linear-gradient(120deg, rgba(34,139,167,1) 0%, rgba(30,29,32,1)100%)"
      },
    },

    {
      id: 8,
      en: "Storm",
      pl: "Burza",
      img: Storm,
      bgc: {
        background: "linear-gradient(120deg, rgba(54,52,52,1) 0%, rgba(36,26,2,1)100%)"
      },
    },

    {
      id: 9,
      en: "scattered clouds",
      pl: "Rozproszone chmury",
      img: WhiteClouds,
      bgc: {
        background: "linear-gradient(120deg, rgba(155,198,189,1) 0%, rgba(181,215,228,1)100%)"
      },
    },

    {
      id: 10,
      en: "few clouds",
      pl: "Kilka chmurek",
      img: SunWithClouds,
      bgc: {
        background: "linear-gradient(120deg, rgba(173,0,214,1) 0%, rgba(174,25,20,1)100%)"
      },
    },

    {
      id: 11,
      en: "mist",
      pl: "Mgła",
      img: Mist,
      bgc: {
        background: "linear-gradient(120deg, rgba(187,186,186,1) 0%, rgba(114,112,112,1)100%)"
      },
    },

    {
      id: 12,
      en: "Clear",
      pl: "Bezchmurnie",
      img: Sun,
      bgc: {
        background: "linear-gradient(120deg, rgba(214,193,0,1) 0%, rgba(213,42,36,1)100%)"
      },
    },
  ]

  let today = []
  let style = {}
  if(typeof(weather.main) !== "undefined") {
    today = data.filter(item => weather.weather[0].main === item.en)
    if(today.length > 0) {
      style = today[0].bgc
    }
    
  } 
  
 const load = (<>
 <div className="content">
    <div className="planet">
       <div className="ring"></div>
          <div className="cover-ring"></div>
       <div className="spots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
 
       </div>
    </div>
    <p>loading</p>
 </div></>)

  return (
    <main style={style}>
      <input 
        type="text" 
        placeholder="Miasto"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={e => search(e)}
       />
    
     {typeof(weather.main) !== "undefined" && today.length > 0 ? (

       <div className="location">
         <div className="temp"><p>{Math.round(weather.main.temp)}°C</p></div>
         <div className="name">{weather.name}, {weather.sys.country}</div>
         <div className="image"><img src={today[0].img} alt="sun"/></div>
         <div className="weather">{

          today[0].pl
         }</div>
       </div>
     ) : null}

     {weather.cod === "404" ? <p className="error">Nie znaleziono takiego miasta</p> : null}
     {loading ? load : null }
     </main>
   
  );
}

export default App;
