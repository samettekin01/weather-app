import { useEffect, useState } from 'react';
import axios from 'axios';
import cities from "./data/cities.json"
import { Listbox } from '@headlessui/react';
import WeatherCard from './components/weatherCard';
import './App.css';

function App() {
  const [list, setList] = useState(cities[0]);
  const [city, setCity] = useState("Ankara");
  const [cityWeather, setCityWeather] = useState();

  useEffect(() => {
    setCity(list.city)
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ac9d660f2abc55c4c76f24bffb8874cf&units=metric&cnt=5`)
      .then(p => setCityWeather(p.data));
  }, [city, list]);

  return (
    <div className="App">
      <div className='container'>
        <div className='relative w-64 bg-white rounded-xl mt-5'>
          <Listbox value={list} onChange={setList}>
            <Listbox.Button className="listbox-button">{list.city}</Listbox.Button>
            <Listbox.Options className="listbox-options">
              {cities && cities.map((data, i) =>
                <Listbox.Option
                  className={({ active }) =>
                    `p-1 ${active ? ` cursor-pointer bg-sky-900 text-white rounded-lg outline outline-1 outline-sky-300` : `bg-sky-50`}`
                  }
                  key={i}
                  value={data}
                >
                  {data.city}
                </Listbox.Option>
              )}
            </Listbox.Options>
          </Listbox>
        </div>
        <WeatherCard data={cityWeather} city={city} />
      </div>
    </div>
  );
}

export default App;
