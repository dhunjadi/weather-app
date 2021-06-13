import React, {useState} from 'react'
import '../styles.css'
import Forecast from './Forecast'
import Header from './Header'


function App() {

      const api = {
        key: '74571e7cd24e48358e1cca1d7cf7bf9c',
        base: 'https://api.openweathermap.org/data/2.5/'
    }

    const [location, setLocation] = useState('')
    const [forecast, setForecast] = useState({})


    function search(e) {
        if (e.key === 'Enter') {
            fetch(`${api.base}forecast?q=${location}&units=metric&APPID=${api.key}`) 
            .then(res => res.json())
            .then(result => {
                setLocation('')
                setForecast(result)
                console.log(result)
            })     
        }
    }

    function selectLocation(e) {
        setLocation(e.target.value)
    }



  return (
    (typeof forecast != 'undefined') ? (
    <div className={typeof forecast.list != 'undefined' ? `App ${forecast.list[0].weather[0].main}` : 'App'}>
      <main>
        <Header 
        selectLocation={selectLocation}
        location={location}
        search={search}
        forecast={forecast}
        />
        <Forecast 
        forecast={forecast}
        />
      </main>
    </div>
    ) : ('')
  );
}

export default App;
