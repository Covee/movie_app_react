import React, { Component } from 'react';
import './Movie.css';


class Movie extends Component{
	render(){
		return(
			<div>
				<MoviePoster />
				<h1>hello movie!</h1>
			</div>
		)
	}
}

class MoviePoster extends Component{
	render(){
		return(
			<img src='https://image.tmdb.org/t/p/w300_and_h450_bestv2/l1skme2RHSFm1c7ipdlR54mVfEq.jpg'/>
		)
	}
}

export default Movie