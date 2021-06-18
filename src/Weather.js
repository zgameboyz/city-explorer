import React from 'react';
import {ListGroup} from 'react-bootstrap';
class Weather extends React.Component{
  render(){
    console.log(this.props)
    return(
      <>
      <h3>Weather</h3>

<ListGroup>
  {this.props.banana.map((weather,i)=>
  <ListGroup.Item key={i}>
    {weather.date}: {weather.description}
  </ListGroup.Item>)}</ListGroup>

        </>
    )
  }
}

export default Weather