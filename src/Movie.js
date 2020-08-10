import React from 'react';
import PropTypes from 'prop-types';

// state가 딱히 필요하지 않는 경우는 function component
// state가 필요하면 class component
function Movie({id, year, title, summary, poster}){
    console.log({id},{year});
    return <h4>title : {title}</h4>;
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
};

export default Movie;