import React from 'react';
import {
  Route,
  Router,
  Switch
} from 'react-router';
import axios from 'axios';
import history from '../history';
import M from '../page/menu/menu';
import L from '../page/login/login';

axios.defaults.headers.common['auth'] = 'road2018';
axios.defaults.timeout = 3000;

const router = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={L} />
      <Route exact path="/work" component={M} />
      <Route exact path="/user" component={M} />
      <Route exact path="/mission" component={M} />
      <Route exact path="/message" component={M} />
      <Route exact path="/setting" component={M} />
      <Route exact path="/changepwd" component={M} />
      <Route exact path="/changestate" component={M} />
    </Switch>
  </Router>
);

export default router;