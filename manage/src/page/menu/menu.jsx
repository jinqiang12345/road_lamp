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
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import PersonAdd from 'material-ui/svg-icons/action/account-circle';
import ContentLink from 'material-ui/svg-icons/action/settings';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/action/help';
import Delete from 'material-ui/svg-icons/action/exit-to-app';
import Chart from 'material-ui/svg-icons/editor/insert-chart';
import Error from 'material-ui/svg-icons/alert/error';
import Build from 'material-ui/svg-icons/action/build';
import Content from 'material-ui/svg-icons/content/content-paste';
import Work from 'material-ui/svg-icons/action/work';
import Perm from 'material-ui/svg-icons/action/perm-identity';
import Account from 'material-ui/svg-icons/action/supervisor-account';
import Control from '../control/control';
import Map from '../map/map';
import ETable from '../maintain/errortable';
import RTable from '../record/record';
import MP from '../managep/managep';
import MAP from '../maintainp/maintainp';
import PS from '../proserver/proserver';
import ERRM from '../maintain/errmessage';
import FT from '../fix/fixtable';
import FIXM from '../fix/fixmessage';
import U from '../user/user';
import CP from '../user/changepwd';
import { loginout, removeerror, removefix } from '../../actions';


class M extends Component {

  state = {
    open: false
  }
  componentDidMount() {
    if(this.props.login.logname === undefined) {
      history.push('/');
    }
  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  loginout = () => {
    this.props.dispatch(removeerror());
    this.props.dispatch(removefix());
    this.props.dispatch(loginout());
    history.push('/');
  }
  render() {
    const Logged = (props) => (
      <IconMenu
        {...props}
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText={"用户" + this.props.login.logname} leftIcon={<PersonAdd />} />
        <MenuItem primaryText="详细信息" leftIcon={<RemoveRedEye />} onClick={() => history.push('/user')}/>
        <MenuItem primaryText="修改密码" leftIcon={<ContentLink />} onClick={() => history.push('/changepwd')}/>
        <Divider />
        <MenuItem primaryText="操作帮助" leftIcon={<ContentCopy />} />
        <Divider />
        <MenuItem primaryText="退出登录" leftIcon={<Delete />} onClick={this.loginout}/>
      </IconMenu>
    );
    Logged.muiName = 'IconMenu';
    return (
      <Router history={history}>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="远程路灯监控管理系统"
              style={{width: '100%'}}
              onLeftIconButtonClick={() => this.setState({open: true})}
              iconElementRight={<Logged />}
            />
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem onClick={() => {history.push('/control');this.setState({open:false})}} leftIcon={<Chart />}>实时监控信息</MenuItem>
              <MenuItem onClick={() => {history.push('/chart');this.setState({open:false})}} leftIcon={<Chart />}>路灯监控信息</MenuItem>
              <MenuItem onClick={() => {history.push('/errortable');this.setState({open:false})}} leftIcon={<Error />}>故障路灯处理</MenuItem>
              <MenuItem onClick={() => {history.push('/fixtable');this.setState({open:false})}} leftIcon={<Build />}>维修任务记录</MenuItem>
              <MenuItem onClick={() => {history.push('/record');this.setState({open:false})}} leftIcon={<Content />}>处理信息记录</MenuItem>
              <MenuItem onClick={() => {history.push('/managep');this.setState({open:false})}} leftIcon={<Work />}>管理人员信息</MenuItem>
              <MenuItem onClick={() => {history.push('/maintainp');this.setState({open:false})}} leftIcon={<Perm />}>维修人员信息</MenuItem>
              <MenuItem onClick={() => {history.push('/proserver');this.setState({open:false})}} leftIcon={<Account />}>设备供应商信息</MenuItem>
            </Drawer>
            <Switch>
              <Route exact path="/control" component={Control} />
              <Route exact path="/chart" component={Map} />
              <Route exact path="/errortable" component={ETable} />
              <Route exact path="/fixtable" component={FT} />
              <Route exact path="/record" component={RTable} />
              <Route exact path="/managep" component={MP} />
              <Route exact path="/maintainp" component={MAP} />
              <Route exact path="/proserver" component={PS} />
              <Route exact path="/errormsg" component={ERRM} />
              <Route exact path="/fixmsg" component={FIXM} />
              <Route exact path="/user" component={U} />
              <Route exact path="/changepwd" component={CP} />
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
