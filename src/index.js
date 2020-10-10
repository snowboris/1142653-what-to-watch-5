import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const data = {
  film: {
    nameFilm: `Матрица`,
    genre: `Фантастика, боевик`,
    dateRelease: `1999`
  }
};

ReactDOM.render(<App film={data.film} />, document.getElementById(`root`));
