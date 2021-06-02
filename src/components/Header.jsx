import React from 'react'
import Location from './Location'

export default function Header(props) {

    return (
        <>
            <div className="search-box">
                <input
                    type="text"
                    className='search-bar'
                    placeholder='Location'
                    onChange={props.selectLocation}
                    value={props.location}
                    onKeyPress={props.search}
                />
            </div>
            <Location forecast={props.forecast}/>
        </>
    )
}
