import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "몽정기",
            poster: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/l1skme2RHSFm1c7ipdlR54mVfEq.jpg"
          },
          {
            title: "올드보이",
            poster: "https://upload.wikimedia.org/wikipedia/fi/e/ea/Oldboy_movie.jpg"
          },
          {
            title: "앤트맨",
            poster: "https://t1.daumcdn.net/cfile/tistory/2212E53F55DF37E510"
          },
          {
            title: "해리포터와 마법사의 돌",
            poster: "https://t1.daumcdn.net/cfile/tistory/121C57444F4E14AB11"
          },
        ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
