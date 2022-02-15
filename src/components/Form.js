import React from 'react'

const Form = ({getWeather}) => {
  return (
    <form onSubmit={getWeather}>
        <input type='text' placeholder='city...' name='city' />
        <input type='text' placeholder='country...' name='country' />
        <button>get weather</button>
    </form>
  )
}

export default Form