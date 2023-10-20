import "./weather-card.css"

function WeatherCard({ data, city }) {

    const setDate = (date) => {
        const d = new Date(date);
        const history = `${d.getDay()}.${d.getMonth() + 1}.${d.getFullYear()}`
        const hours = `${d.getHours()}:${d.getMinutes()}0`
        return { history, hours }
    }
    
    return (
        <div className="weathercard">
            {
                data && data.list.map((d, i) => (
                    <div key={i} className="city-weather-container" >
                        <div className='city-name text-center text-white text-2xl'>{city},{data.city.country}</div>
                        <div className='date text-center text-white'>{`${setDate(d.dt_txt).history}`}</div>
                        <div className='date text-center text-white'>{`${setDate(d.dt_txt).hours}`}</div>
                        <div className='weather-img flex flex-col justify-center'>
                            <div
                                className='w-9/10'
                                style={{
                                    width: "100%",
                                    height: "80px",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundImage: `url(https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png)`
                                }}
                                alt={city}
                            />
                        </div>
                        <div className='text-center text-white text-lg'>Clear</div>
                        <div className='city-weather-temp text-center text-white text-lg'>
                            <div className='p-5'>Temp: {d.main.temp}°</div>
                            <div className='flex flex-row justify-center'>
                                <span className='text-sm'>Max:<br /> {d.main.temp_max}<small>°</small></span>
                                <div className='border-solid border-orange-500 rounded-sm border-2 opacity-40 mr-5 ml-5'></div>
                                <span className='text-sm'> Min:<br />{d.main.temp_min}°</span>
                            </div>
                        </div>
                    </div>

                ))}
        </div>
    )
}

export default WeatherCard;