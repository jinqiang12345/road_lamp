import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Route,
  Router,
  Switch
} from 'react-router';
import history from '../../history';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover/Popover';
import {Menu, MenuItem} from 'material-ui/Menu';
import Notification from 'material-ui/svg-icons/social/notifications-none';
import Event from 'material-ui/svg-icons/notification/event-note';
import Palette from 'material-ui/svg-icons/image/palette';
import Drawer from 'material-ui/Drawer';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import PersonAdd from 'material-ui/svg-icons/action/account-circle';
import ContentLink from 'material-ui/svg-icons/action/settings';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/action/help';
import Delete from 'material-ui/svg-icons/action/exit-to-app';
import Airplay from 'material-ui/svg-icons/av/airplay';
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
    open: false,
    l: false
  }
  componentDidMount() {
    if(this.props.login.logname === undefined) {
      history.push('/');
    }
  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      l: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      l: false,
    });
  };

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
              title="城市路灯远程监控系统"
              style={{zIndex: '5', width: '100%'}}
              onLeftIconButtonClick={() => this.setState({open: true})}
            />
            <div style={{position: 'absolute', top: '8px', right: '20px', zIndex: '1000', width: '300px', height: '48px'}}>
              <span style={{position: 'absolute', top: '9px', right: '150px'}} onClick={this.handleClick}>
              <Avatar
                src="https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9f6f847c.jpg"
                size={35}
                style={{marginRight: '10px', cursor: 'pointer'}}
              />
              <span style={{marginRight: '10px', color: '#fff', cursor: 'pointer'}}>{this.props.login.logname}</span>
              </span>
              <Popover
                style={{width: '224px'}}
                open={this.state.l}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
              >
                <div>
                  <div style={{width: '100%', background: 'rgb(0, 188, 212)', height: '81px', textAlign: 'center', padding: '23px 0'}}>
                    <Avatar
                      src="https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9f6f847c.jpg"
                      size={35}
                      style={{marginRight: '10px', cursor: 'pointer'}}
                    />
                    <span style={{color: '#fff', cursor: 'pointer'}}>{this.props.login.logname}</span>
                  </div>
                  <div style={{width: '100%', height: '40px', textAlign: 'center', padding: '5px 0'}}>
                    <Avatar
                      src="https://pan.baidu.com/box-static/disk-header/header/img/capacity-5t.png?t=1521599641001"
                      size={30}
                      style={{marginRight: '10px', cursor: 'pointer'}}
                    />
                    <Avatar
                      src="https://pan.baidu.com/box-static/disk-header/header/img/download-speed-raising.png?t=1521599641001"
                      size={30}
                      style={{marginRight: '10px', cursor: 'pointer'}}
                    />
                    <Avatar
                      src="https://pan.baidu.com/box-static/disk-header/header/img/cloud-unzip.png?t=1521599641001"
                      size={30}
                      style={{marginRight: '10px', cursor: 'pointer'}}
                    />
                    <Avatar
                      src="https://pan.baidu.com/box-static/disk-header/header/img/file-limit-5000@2x.png?t=1521599641001"
                      size={30}
                      style={{marginRight: '10px', cursor: 'pointer'}}
                    />
                    <Avatar
                      src="https://pan.baidu.com/box-static/disk-header/header/img/know-more@2x.png?t=1521599641001"
                      size={30}
                      style={{marginRight: '10px', cursor: 'pointer'}}
                    />
                  </div>
                  <Menu>
                    <MenuItem primaryText="个人资料" onClick={() => {history.push('/user');this.setState({l: false})}}/>
                    <MenuItem primaryText="帮助中心" />
                    <MenuItem primaryText="修改密码" onClick={() => {history.push('/changepwd');this.setState({l: false})}}/>
                    <MenuItem primaryText="退出" onClick={this.loginout}/>
                  </Menu>
                </div>
              </Popover>
              <span style={{position: 'absolute', top: '0px', right: '0px'}}>
              <IconButton iconStyle={{color: '#fff'}}><Notification /></IconButton>
              <IconButton iconStyle={{color: '#fff'}}><Event /></IconButton>
              <IconButton iconStyle={{color: '#fff'}}><Palette /></IconButton>
              </span>
            </div>
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem onClick={() => {history.push('/control');this.setState({open:false})}} leftIcon={<Airplay />}>实时监控信息</MenuItem>
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
