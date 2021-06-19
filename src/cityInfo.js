import React from 'react';
import Card from 'react-bootstrap/Card'

class CityInfo extends React.Component{

render(){
return(

  
// {this.state.errorCode.length > 0 ?
  // <Container>
  //   <p>{this.state.errorCode}</p>
  // </Container> :
  <Card>
    <ul>
      <li>City Name: {this.props.name}</li>
      <li>Latitude: {this.props.lat}</li>
      <li>Longitude: {this.props.long}</li>
    </ul>
  </Card>
)}}

export default CityInfo;
