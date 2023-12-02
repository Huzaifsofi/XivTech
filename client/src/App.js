import React from 'react'
import WeatherForm from './component/WeatherForm'
import weather from './asset/weather.png'

function App() {
  return (
    <div>
      <div className='logo-img'>
        <img src={weather} alt='' />
      </div>
      <WeatherForm />
    </div>
  )
}

export default App