import React from 'react'
import Future from './Future'

export default function Forecast(props) {


    let array = props.forecast.list

    function show(){
        console.log(array.slice(1, 3))
    }

    return (
        (typeof props.forecast.city != 'undefined') ? (
            <div className="forecast-container">
                <div className="temp">
                    {Math.round(props.forecast.list[0].main.temp)}°C<hr />
                </div>
                <div onClick={show} className="forecast-today">
                    {props.forecast.list[0].weather[0].main}
                </div>
                <Future
                    forecast={props.forecast}
                    
                />
            </div>

        ) : ('')
    )
}

