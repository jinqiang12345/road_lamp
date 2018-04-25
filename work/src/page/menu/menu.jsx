import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Route,
  Router,
  Switch
} from 'react-router';
import history from '../../history';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import PersonAdd from 'material-ui/svg-icons/action/account-circle';
import Light from 'material-ui/svg-icons/action/lightbulb-outline';
import ContentLink from 'material-ui/svg-icons/action/settings';
import Build from 'material-ui/svg-icons/action/build';
import NavigationClose from 'material-ui/svg-icons/communication/chat';
import Map from '../map/gdmap';
import U from '../user/user';
import Mission from '../mission/mission';
import S from '../setting/setting';
import Message from '../mission/message';
import Changepwd from '../setting/changepwd';
import Changestate from '../setting/changestate';
import { loginout } from '../../actions';


class M extends Component {

  state = {
    open: false,
    title: '设备信息'
  }
  componentWillMount() {
    if(this.props.login.logname === undefined) {
      history.push('/');
    }
  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  loginout = () => {
    this.props.dispatch(loginout());
    history.push('/');
  }
  render() {
    return (
      <Router history={history}>
        <MuiThemeProvider>
          <div>
            <AppBar
              title={this.state.title}
              style={{width: '100%'}}
              onLeftIconButtonClick={() => this.setState({open: true})}
              iconElementRight={<IconButton><NavigationClose /></IconButton>}
              onRightIconButtonClick={() => history.push('/mission')}
            />
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem onClick={() => {history.push('/work');this.setState({open:false,title:'设备信息'})}} leftIcon={<Light />}>设备</MenuItem>
              <MenuItem onClick={() => {history.push('/user');this.setState({open:false,title:'用户信息'})}} leftIcon={<PersonAdd />}>用户</MenuItem>
              <MenuItem onClick={() => {history.push('/mission');this.setState({open:false,title:'任务'})}} leftIcon={<Build />}>任务</MenuItem>
              <MenuItem onClick={() => {history.push('/setting');this.setState({open:false,title:'用户设置'})}} leftIcon={<ContentLink />}>设置</MenuItem>
            </Drawer>
            <Switch>
              <Route exact path="/work" component={Map} />
              <Route exact path="/user" component={U} />
              <Route exact path="/mission" component={Mission} />
              <Route exact path="/setting" component={S} />
              <Route exact path="/message" component={Message} />
              <Route exact path="/changepwd" component={Changepwd} />
              <Route exact path="/changestate" component={Changestate} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}
function select(state) {
  return {
    login: state.login
  }
}

export default connect(select)(M);
