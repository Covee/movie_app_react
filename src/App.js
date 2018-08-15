import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "몽정기",
  "올드보이",
  "앤트맨",
  "해리포터와 마법사의 돌"
]

const movieImages = [
  "https://image.tmdb.org/t/p/w300_and_h450_bestv2/l1skme2RHSFm1c7ipdlR54mVfEq.jpg",
  "https://upload.wikimedia.org/wikipedia/fi/e/ea/Oldboy_movie.jpg",
  "https://t1.daumcdn.net/cfile/tistory/2212E53F55DF37E510",
  "https://t1.daumcdn.net/cfile/tistory/121C57444F4E14AB11"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
