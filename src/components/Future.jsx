import React from 'react'
import WeatherCard from './WeatherCard'

export default function Future(props) {

    let array = props.forecast.list.slice(1, 7)

    function createCard(cardProp){
        return (
            <WeatherCard 
            key={cardProp.dt_txt}
            time={cardProp.dt_txt.slice(11, 13)}
            icon={`url(http://openweathermap.org/img/wn/${cardProp.weather[0].icon}@2x.png)`}
            temp={Math.round(cardProp.main.temp)}
            />
        )
    }

    return (
        (typeof props.forecast.city != 'undefined') ? (
            <div className="forecast-future-container">

                {array.map(createCard)}

            </div>
        ) : ('')
    )
}

