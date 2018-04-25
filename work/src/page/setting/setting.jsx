import React, { Component } from 'react';
import { connect } from 'react-redux'
import history from '../../history';
import {List, ListItem} from 'material-ui/List';
import PersonAdd from 'material-ui/svg-icons/action/verified-user';
import ActionGrade from 'material-ui/svg-icons/action/work';
import Out from 'material-ui/svg-icons/action/open-in-new';
import { loginout } from '../../actions';

class S extends Component {
  changepwd = () => {
    history.push('/changepwd');
  }
  changestate = () => {
    history.push('/changestate');
  }
  logout = () => {
    this.props.dispatch(loginout());
    history.push('/');
  }
  render() {
    return (
        <List>
            <ListItem primaryText="修改密码" leftIcon={<PersonAdd />} onClick={this.changepwd}/>
            <ListItem primaryText="修改状态" leftIcon={<ActionGrade />} onClick={this.changestate}/>
            <ListItem primaryText="退出登录" leftIcon={<Out />} onClick={this.logout}/>
        </List>
    );
  }
}
function select(state) {
  return {
    login: state.login
  }
}

export default connect(select)(S);
