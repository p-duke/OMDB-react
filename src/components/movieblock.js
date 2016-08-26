import React, { Component } from 'react';

export default class MovieBlock extends Component {
  // grab the movie prop and put the attributes out
  render () {
    return(
      <div>
        <ul>
          <li>Title: {this.props.movieDetails.Title}</li>
          <li>Type: {this.props.movieDetails.Type}</li>
          <li>Year: {this.props.movieDetails.Year}</li>
          <li>ID: {this.props.movieDetails.imdbID}</li>
        </ul>
      </div>
    );
  }

}
