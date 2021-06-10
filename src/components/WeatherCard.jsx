import React from 'react'

export default function WeatherCard(props) {
    return (
        <div className="future-div">
            <div className="future-time">{props.time}</div>
            <div className="future-icon" style={{ backgroundImage: props.icon }}></div>
            <div className="future-temp">{props.temp}°C</div>
        </div>



    )
}
