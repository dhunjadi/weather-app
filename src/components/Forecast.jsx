import React from 'react'
import Future from './Future'

export default function Forecast(props) {


    return (
        (typeof props.forecast.city != 'undefined') ? (
            <div className="forecast-container">
                <div className="temp">
                    {Math.round(props.forecast.list[0].main.temp)}°C<hr />
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

