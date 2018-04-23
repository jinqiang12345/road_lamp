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
      <Route exact path="/control" component={M} />
      <Route exact path="/chart" component={M} />
      <Route exact path="/errortable" component={M} />
      <Route exact path="/fixtable" component={M} />
      <Route exact path="/record" component={M} />
      <Route exact path="/managep" component={M} />
      <Route exact path="/maintainp" component={M} />
      <Route exact path="/proserver" component={M} />
      <Route exact path="/errormsg" component={M} />
      <Route exact path="/fixmsg" component={M} />
      <Route exact path="/user" component={M} />
      <Route exact path="/changepwd" component={M} />
    </Switch>
  </Router>
);

export default router;