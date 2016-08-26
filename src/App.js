import React, { Component } from 'react';
import logo from './logo.svg';
import cage from './nicholas-cage-stencil.svg';
import cageface from './nick.png';
import axios from 'axios';
import './App.css';

import MovieList from './components/movielist.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios.get('http://www.omdbapi.com/', {
        params: {
          s: 'terminator'
        }
      })
      .then((response) => {
        // set movies state to array of movies in response
        this.setState({movies: response.data.Search});
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //
  // handleSubmit(event) {
  //   event.preventDefault();
  //   var form =
  //
  // }



  render() {
    console.log(this.state.movies)
    return (
      <div className="App">
        <div className="App-header">
          <img src={cageface} className="App-logo" alt="logo" />
          <h2>Welcome to OMDB!</h2>
        </div>
        <div className="App-intro">
          <section>
            <p id="App-intro">Search for a movie!</p>
            <form id="movie-form" onSubmit=''>
              <input ref="" type='text' name="movie"/>
              <input ref="submitButton" type="submit" value="Movie"/>
            </form>
          </section>
          <MovieList listResults={this.state.movies}/>
        </div>
      </div>
    );
  }
}

export default App;
