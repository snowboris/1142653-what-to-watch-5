import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
    <MainPage film={props.film}/>
  );
};

App.propTypes = {
  film: PropTypes.shape({
    nameFilm: PropTypes.string.isRequired,
    genre: PropTypes.string,
    dateRelease: PropTypes.string
  })
};


export default App;
