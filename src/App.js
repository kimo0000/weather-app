import React, { Component} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = 'e634413557b9f6ba626e1e7dc79fa79c';
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {

   state = {
     city: '',
     country: '',
     temperature: '',
     humidity: '',
     description: '',
     error: '',
   }


  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`);
    const data = await api.json();
    console.log(data)
    if (city && country) {
      this.setState({
         city: data.name,
         country: data.sys.country,
         temperature: data.main.temp,
         humidity: data.main.humidity,
         description: data.weather[0].description,
         error: '',
    })
    }else {
      this.setState({
          city: '',
         country: '',
         temperature: '',
         humidity: '',
         description: '',
         error: alert('please enter data'),
      })
    }
  }

  render () {
    return (
      <div className="App">
        <div className="container">
           <h1>Weather App</h1>
           <div className="content">
             <Form getWeather={this.getWeather} />
             <Weather city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                 />
           </div>
        </div>
      </div>
    );
  }
}

export default App;
