import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
  }

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
          title={movie.movieNm} 
          poster={movie.rank}
          seen={movie.audiAcc}
          key={movie.movieCd} 
      />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20180815')
    .then(response => response.json())
    .then(json => json.boxOfficeResult.dailyBoxOfficeList)
    .catch(err => console.log(err))
  }

  render() {
    const {movies} = this.state;
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
