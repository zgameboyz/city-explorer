import React from 'react';
import {ListGroup} from 'react-bootstrap';
import WeatherDays from './WeatherDays';
class Weather extends React.Component{
  render(){
    console.log(this.props)
    return(
      <>
      <h3>Weather</h3>

    
       <ListGroup>
         {this.props.banana.map((object,i)=>
         
          <WeatherDays key={i} date={object.date} description = {object.description} />

         )
        }
   </ListGroup>
   </>
    )}
}

export default Weather