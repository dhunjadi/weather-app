import React from 'react'
import Future from './Future'

export default function Forecast(props) {


    return (
        (typeof props.forecast.city != 'undefined') ? (
            <div className="forecast-container">
                <div className="temp">
                    <h3>{Math.round(props.forecast.list[0].main.temp)}°C</h3>
                    <div className="min-max">
                        <div className="max"><h6>↑ {Math.round(props.forecast.list[0].main.temp_max)}°C</h6></div>
                        <div className="min"><h6>↓ {Math.round(props.forecast.list[0].main.temp_min)}°C</h6></div>
                    </div>
                </div>
                <div className="forecast-today">
                    {props.forecast.list[0].weather[0].main}
                </div>
                <Future
                    forecast={props.forecast}
                />
            </div>

        ) : ('')
    )
}

