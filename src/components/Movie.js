import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";
import {Link} from "react-router-dom";

// state가 딱히 필요하지 않는 경우는 function component
// state가 필요하면 class component
function Movie({year, title, summary, poster, genres}){
    return (
      <Link to={{
        pathname : '/movie-detail',
        state : { // 이동하면 전송할 값
          year : year, // 기존 표현
          title, // ES6표현
          summary,
          poster,
          genres
        } 
      }}>
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">{genre}</li>
            ))}{" "}
          </ul>
          <p className="movie_summary">{summary.slice(0,180)}</p>
        </div>
      </div>
      </Link>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;