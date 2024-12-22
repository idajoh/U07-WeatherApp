import Forecast from "./components/Forecast"
import TempAndDetails from "./components/TempAndDetails"
import TimeAndLocation from "./components/TimeAndLocation"
import Inputs from "./components/inputs"
import TopButtons from "./components/topButtons"
import getFormattedWeatherData from "./services/weatherService"
//import getWeatherData from "./services/weatherService"



const App = () => {

  const getWeather = async () => {
    const data = await getFormattedWeatherData({q: "berlin"});
    console.log(data);
  };

  getWeather();

  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-300">
      <TopButtons></TopButtons>
      <Inputs></Inputs>

    <TimeAndLocation></TimeAndLocation>
    <TempAndDetails></TempAndDetails>
    <Forecast />
    <Forecast />
    </div>
  )
}

export default App
