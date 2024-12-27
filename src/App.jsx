import { useEffect, useState, useCallback } from "react";
import Forecast from "./components/Forecast";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import Inputs from "./components/inputs";
import TopButtons from "./components/topButtons";
import getFormattedWeatherData from "./services/weatherService";

const App = () => {
  const [query, setQuery] = useState({ q: "nairobi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = useCallback(async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
      console.log(data);
    });
  }, [query, units]); 

  useEffect(() => {
    getWeather();
  }, [getWeather]); 

  const formatBackground = () => {
    if (!weather) return 'from-cyan-700 to-blue-400';
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-400";
    return "from-yellow-600 to-orange-700"; 
  }
  
  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-300 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast title="3 hour step forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}
    </div>
  );
};

export default App;
