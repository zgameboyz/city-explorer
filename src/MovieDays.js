import React from 'react';
import {ListGroup} from 'react-bootstrap';

class MovieDays extends React.Component{

render(){
  return(

    <ListGroup.Item>
    {this.props.title}: {this.props.release_date}
  </ListGroup.Item>
)
}
}


export default MovieDays