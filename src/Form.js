import React from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';



class Forms extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      city:"",
      cityLat:"",
      cityLon:"",
      displayName:"",
      cityMap:"",
      errorCode:"",
    }
  }
handleChange = (e) => {

  this.setState({city: e.target.value})



}

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const key = process.env.REACT_APP_CITY_KEY;
      let URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`
      const response = await axios.get(URL);

      const cityInfo = response.data[0];

      let displayName = cityInfo.display_name;
      let cityLat = cityInfo.lat;
      let cityLon = cityInfo.lon;

      this.setState({ displayName, cityLat, cityLon });

      this.showMap();
    }

    catch (err) {

      console.log('err.message');
      this.setState({ errorCode: err.message })
    }
  }


  showMap = async (e) => {
    const key = process.env.REACT_APP_CITY_KEY;

    let URL = `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${this.state.cityLat},${this.state.cityLon}&zoom=18`;
    
    this.setState({cityMap:URL})
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
      {this.state.errorCode.length>0?
      <Container>
        <p>{this.state.errorCode}</p>
      </Container>
      :
      <Card>
        <ul>
          <li>City Name: {this.state.displayName}</li>
          <li>Latitude: {this.state.cityLat}</li>
          <li>Longitude: {this.state.cityLon}</li>
        </ul>
      </Card>
      }
    <Card style={{width:'30rem'}}>
      <Card.Img variant="top" src = {this.state.cityMap}/>
    </Card>


      </>
    )
  };
}



export default Forms;