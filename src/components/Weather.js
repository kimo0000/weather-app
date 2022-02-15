import React from 'react'

const Weather = ({city, country, temperature, humidity, description, error}) => {
  return (
    <div className="info">
        {
            city && 
            <p className="info_key">
            city: <span className="info_value">{city}</span> 
            </p>
        }
        {
            country && 
            <p className="info_key">
            country: <span  className="info_value">{country}</span>
            </p>
        }
        {
            temperature && 
            <p className="info_key">
            temperature: <span  className="info_value">{temperature}</span>
            </p>
        }
        {
            humidity && 
            <p className="info_key">
            humidity: <span  className="info_value">{humidity}</span>
            </p>
        }
        {
            description && 
            <p className="info_key">
            description: <span  className="info_value">{description}</span>
            </p>
        }
        {
            error && 
            <p className="info_key">
            error: <span  className="info_value">{error}</span>
            </p>
        }
    </div>
  )
}

export default Weather