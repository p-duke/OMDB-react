import React, { Component } from 'react';

import MovieBlock from './movieblock.js';

export default class MovieList extends Component {
  render () {
    // grab the movies list prop and iterate through it with each movie
    return(
      <div>
        {this.props.listResults.map(function(movie, i) {
          return (
            <MovieBlock
              key={i}
              movieDetails={movie}
              />
          );
        })}
      </div>
    );
  }

}
