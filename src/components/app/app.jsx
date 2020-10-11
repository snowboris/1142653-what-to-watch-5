import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import Review from '../review/review';
import Player from '../player/player';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MainPage film={props.film} />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/mylist' exact>
          <MyList />
        </Route>
        <Route path='/films/:id' exact>
          <Film />
        </Route>
        <Route path='/films/:id/review' exact>
          <Review />
        </Route>
        <Route path='/player/:id' exact>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
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
