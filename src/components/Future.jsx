import React from 'react'

export default function Future(props) {

    let time = new Date().getHours()

    let array = props.forecast.list
    let sliced = array.slice(0,3)

    

    function show(){
        console.log(sliced[0].main.temp)
    }

    return (
        (typeof props.forecast.city != 'undefined') ? (
        <div className="forecast-future-container">
            <div onClick={show} style={{ height: '80px', width: '60px', backgroundColor: 'red' }}>{time + 3 < 24 ? time + 3 : (time + 3) - 24}<br />{Math.round(props.forecast.list[1].main.temp)}°C</div>
            <div style={{ height: '80px', width: '60px', backgroundColor: 'blue' }}>{time + 6 < 24 ? time + 6 : (time + 6) - 24}<br />{Math.round(props.forecast.list[2].main.temp)}°C</div>
            <div style={{ height: '80px', width: '60px', backgroundColor: 'green' }}>{time + 9 < 24 ? time + 9 : (time + 9) - 24}<br />{Math.round(props.forecast.list[3].main.temp)}°C</div>
            <div style={{ height: '80px', width: '60px', backgroundColor: 'yellow' }}>{time + 12 < 24 ? time + 12 : (time + 12) - 24}<br />{Math.round(props.forecast.list[4].main.temp)}°C</div>
            <div style={{ height: '80px', width: '60px', backgroundColor: 'orange' }}>{time + 15 < 24 ? time + 15 : (time + 15) - 24}<br />{Math.round(props.forecast.list[5].main.temp)}°C</div>
            <div style={{ height: '80px', width: '60px', backgroundColor: 'brown' }}>{time + 18 < 24 ? time + 18 : (time + 18) - 24}<br />{Math.round(props.forecast.list[6].main.temp)}°C</div>
        </div>
        ) : ('')
    )
}