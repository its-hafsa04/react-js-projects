import React, { useState } from "react";
const api ={
    key: 'f6fd5222d8826e479e879b59b12abaeb',
    base: 'https://api.openweathermap.org/data/2.5/'
}


const App = () => {

    const [query,setQuery] = useState('');
    const [weather,setWeather] = useState({});

const search=(event)=>{
if(event.key === 'Enter'){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result =>{ 
        setWeather(result);
        setQuery('');
        console.log(result);
    })
}
}

const dateBuilder = (d) =>{
    const months = ['January','Febaray','March','April','May','June','July','Augest','September',
    'October','Navember','December'];
const days =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

 let day = days[d.getDay()];
 let date = d.getDate();
 let month = months[d.getMonth()];
 let year = d.getFullYear();

 return `${day} ${date} ${month} ${year}`;

}

    return (
        <div className={
            (typeof weather.main != "undefined")? 
            ((weather.main.temp > 16)? 'app warm' : 'app')
            : 'app'}>
        <main>
            <div className="search-box">
                <input type="text" placeholder="Search..." onChange={e => setQuery(e.target.value)}
            value={query}   onKeyPress={search}
            className="search-bar"/>
            </div>
            { (typeof weather.main != "undefined") ? (
                <div>
                <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="date">{dateBuilder(new Date())}
                </div>
                <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}℃ </div>
                <div className="weather">{weather.weather[0].main}</div>
                </div>
            </div></div>
            ) : ('')}
        </main>
        </div>
        
    )
};
export default App;