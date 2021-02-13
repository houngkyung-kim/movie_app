import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

function Movie({year, title, summary, poster, genres}) {
  return (
    <div className="movie">
      <img className="poster" src={poster} alt={title} title={title} />
      <div className="data">
        <h3 className="title">{title}</h3>
        <h5 className="year">{year}</h5>
        <p className="summary">{summary}</p>
        <ul className="genres">{genres.map((genre, index) => <li key={index} className="genres__genre">{genre}</li>)}</ul>
      </div>
    </div>
  );
}

export default Movie;