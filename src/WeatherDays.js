import React from 'react';
import {ListGroup} from 'react-bootstrap';

class WeatherDays extends React.Component{

render(){
  return(

    <ListGroup.Item>
    {this.props.date}:  {this.props.description}
  </ListGroup.Item>
)
}
}


export default WeatherDays