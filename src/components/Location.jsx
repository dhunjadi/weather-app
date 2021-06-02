import React from 'react'

export default function Location(props) {

    function showDate(e) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[e.getDay()]
        let date = e.getDate()
        let month = months[e.getMonth()]
        let year = e.getFullYear()
        let hour = e.getHours()
        let minute = e.getMinutes()

        return ` ${hour}:${minute} ${day} ${date} ${month} ${year}`
    }

    return (
        (typeof props.forecast.city != 'undefined') ? (
                <div className="location-container">
                    <div className="location">{props.forecast.city.name}, {props.forecast.city.country}</div>
                    <div className="date">{showDate(new Date())}</div>
                </div>
        ) : ('')


    )
}

