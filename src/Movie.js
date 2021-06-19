import React from 'react';
import {ListGroup} from 'react-bootstrap';
import MovieDays from './MovieDays.js';
class Movie extends React.Component{
  render(){
    console.log(this.props)
    return(
      <>
      <h3>Movies</h3>

      <ListGroup>
         {this.props.banana.map((object,i)=>
         
          <MovieDays key={i} title={object.title} release_date = {object.release_date} />

         )
        }
   </ListGroup>
   </>
    )}
}

export default Movie