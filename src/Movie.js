import React from 'react';
import {ListGroup} from 'react-bootstrap';
class Movie extends React.Component{
  render(){
    console.log(this.props)
    return(
      <>
      <h3>Movies</h3>

<ListGroup>
  {this.props.banana.map((movie,i)=>
  <ListGroup.Item key={i}>
    {movie.title}: {movie.release_date}
  </ListGroup.Item>)}</ListGroup>

        </>
    )
  }
}

export default Movie