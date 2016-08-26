import React, { Component } from 'react';
// import logo from './logo.svg';

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


  handleSubmit(event) {
    event.preventDefault();
    var form = this.refs.movieSearch.value;
    axios.get('http://www.omdbapi.com/', {
        params: {
          s: form,
          type: 

        }
      })
      .then((response) => {
        this.setState({movies: response.data.Search});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.movies)
    return (
      <div className="App">
        <div className="App-header">
          <img src={cageface} className="App-logo" alt="logo" />
          <h2>Welcome to Nicks Picks!</h2>
        </div>
        <div className="App-intro">
          <section>
            <h2>You need a suggestion? Nick has the best recommendations as Americas #1 premier movie star!</h2>
            <p id="App-intro">Nick is standing by! Just put in your search below and Nick will personally hand pick your movie! (...he has nothing better to do.)</p>
            <form id="movie-form" onSubmit={this.handleSubmit.bind(this)}>
              <input ref="movieSearch" type='text' name="movie"/>
              <input ref="submitButton" type="submit" value="Movie"/>
            </form>
            <form id="movie-form" onSubmit={this.handleSubmit.bind(this)}>
              <input ref="movieSearch" type='text' name="movie"/>
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
