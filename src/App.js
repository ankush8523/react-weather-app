import styled from"styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherInfoComponent from "./modules/WeatherInfoComponent";
import { useState } from "react";
import Axios from "axios";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
  "13d": "/icons/13d@2x.png",
  "13n": "/icons/13d@2x.png",
  "50d": "/icons/50d@2x.png",
  "50n": "/icons/50d@2x.png",
  
  
};

const Container=styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 5px 8px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Montserrat;
  background-color: rgb(221, 208, 191);
`;
const AppLabel=styled.span`
  color:black;
  text-decoration: underline;
  font-size: 25px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const[weather,updateWeather]=useState();

  const fetchWeather= async(e)=>{
    e.preventDefault();
    const response=
     await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af0f201f29fc7dbb5b6c40fd32d8db1e`)
     updateWeather(response.data);
  }
  return (
    <Container>
      <AppLabel>WEATHER APP</AppLabel>
      {weather?<WeatherComponent weather={weather}/>:<CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>}
      {/* <WeatherInfoComponent/> */}
      
    </Container>
  );
}

export default App;
