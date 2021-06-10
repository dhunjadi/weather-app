import React from 'react'

export default function Future(props) {

    let time = new Date().getHours()







    return (
        (typeof props.forecast.city != 'undefined') ? (
            <div className="forecast-future-container">
                <div className='future-div'>
                    <div className="future-time">{time + 3 < 24 ? time + 3 : (time + 3) - 24}

                    </div>
                    <div className="future-icon" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${props.forecast.list[1].weather[0].icon}@2x.png)`}}>

                    </div>
                    <div className="future-temp">
                        {Math.round(props.forecast.list[1].main.temp)}°C
                    </div>
                </div>
                <div className='future-div'>
                    <div className="future-time">{time + 3 < 24 ? time + 3 : (time + 3) - 24}

                    </div>
                    <div className="future-icon" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${props.forecast.list[2].weather[0].icon}@2x.png)`}}>

                    </div>
                    <div className="future-temp">
                        {Math.round(props.forecast.list[2].main.temp)}°C
                    </div>
                </div>
                <div className='future-div'>
                    <div className="future-time">{time + 3 < 24 ? time + 3 : (time + 3) - 24}

                    </div>
                    <div className="future-icon" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${props.forecast.list[3].weather[0].icon}@2x.png)`}}>

                    </div>
                    <div className="future-temp">
                        {Math.round(props.forecast.list[3].main.temp)}°C
                    </div>
                </div>
                <div className='future-div'>
                    <div className="future-time">{time + 3 < 24 ? time + 3 : (time + 3) - 24}

                    </div>
                    <div className="future-icon" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${props.forecast.list[4].weather[0].icon}@2x.png)`}}>

                    </div>
                    <div className="future-temp">
                        {Math.round(props.forecast.list[4].main.temp)}°C
                    </div>
                </div>
                <div className='future-div'>
                    <div className="future-time">{time + 3 < 24 ? time + 3 : (time + 3) - 24}

                    </div>
                    <div className="future-icon" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${props.forecast.list[5].weather[0].icon}@2x.png)`}}>

                    </div>
                    <div className="future-temp">
                        {Math.round(props.forecast.list[5].main.temp)}°C
                    </div>
                </div>
                <div className='future-div'>
                    <div className="future-time">{time + 3 < 24 ? time + 3 : (time + 3) - 24}

                    </div>
                    <div className="future-icon" style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${props.forecast.list[6].weather[0].icon}@2x.png)`}}>

                    </div>
                    <div className="future-temp">
                        {Math.round(props.forecast.list[6].main.temp)}°C
                    </div>
                </div>
            </div>
        ) : ('')
    )
}

