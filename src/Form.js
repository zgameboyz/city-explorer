import React from 'react';
import Weather from './Weather.js'
import Movie from './Movie.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const key = process.env.REACT_APP_CITY_KEY;

class Forms extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityLat: "",
      cityLon: "",
      displayName: "",
      cityMap: "",
      errorCode: "",
      weather: [],
      movie: []
    }
  }
  handleChange = (e) => {

    this.setState({ city: e.target.value })
  }




  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`
      const response = await axios.get(URL);
      console.log(response)
      const cityInfo = response.data[0];
      
      let displayName = cityInfo.display_name;
      let cityLat = cityInfo.lat;
      let cityLon = cityInfo.lon;

      let weatherData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather?lat=${cityLat}&lon=${cityLon}&searchQuery=${displayName.split(",")[0]}`);
      console.log(weatherData)
      console.log(displayName)
      let cityMap = `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${cityLat},${cityLon}&zoom=18`;

     
      
      let movieData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movie?movie=${displayName.split(",")[0]}`);
      

      this.setState({ cityMap,displayName, cityLat, cityLon, weather: weatherData.data,movie: movieData.data })
    }
     catch (err) {

      console.log('err.message');
      this.setState({ errorCode: err.message })
    }
  }







  render() {

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="cityForm">
            <Form.Label>Please Enter a City! </Form.Label>
            <Form.Control type="text" placeholder="city name" onChange={this.handleChange} />

          </Form.Group>

          <Button variant="warning" type="submit" >
            Explore!
          </Button>

        </Form>
        {this.state.errorCode.length > 0 ?
          <Container>
            <p>{this.state.errorCode}</p>
          </Container> :
          <Card>
            <ul>
              <li>City Name: {this.state.displayName}</li>
              <li>Latitude: {this.state.cityLat}</li>
              <li>Longitude: {this.state.cityLon}</li>
            </ul>
          </Card>
        }
        <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src={this.state.cityMap} />
        </Card>
        <Weather banana={this.state.weather} />
        <Movie banana={this.state.movie}/>

      </>
    )
  };
}



export default Forms;