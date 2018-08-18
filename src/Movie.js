import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, seen}){
	return(
		<div>
			<MoviePoster poster={poster} />
			<h1>{poster}위: {title}</h1>
			<h3>누적관객수: {seen}</h3>
		</div>
	)
}

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
}

function MoviePoster({poster}){
	return(
		<img src={poster} alt="Movie Poster" />
	)
}

MoviePoster.propTypes = {
	poster: PropTypes.string.isRequired,
}


export default Movie