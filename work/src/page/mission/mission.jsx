import React, { Component } from 'react';
import { connect } from 'react-redux'
import history from '../../history';
import axios from 'axios';
import { message } from 'antd';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Build from 'material-ui/svg-icons/action/build';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {blue500, yellow600} from 'material-ui/styles/colors';
import { error } from '../../actions';

class M extends Component {

  state = {
    data: []
  }
  componentWillMount() {
    let fd = new FormData();
    fd.append("code", this.props.login.code);
    axios.post('http://localhost:1111/workmission', fd)
    .then((response) => {
      if(response.data.success) {
          this.setState({
            data: response.data.data
          });
      } else {
          message.error('获取数据失败！');
      }
    })
    .catch(function (error) {
      console.log(error);
      message.error('网络连接失败！');
    });             
  }
  sss = (e) => {
    this.props.dispatch(error(this.state.data[e]));
    history.push('/message');
  }
  render() {
    return (
        <List>
          {
            this.state.data.map((d, index) => {
              let r = '';
              if(d.type === 1) {
                r =
                  <ListItem
                    key = {index}
                    leftAvatar={<Avatar icon={<Build />} backgroundColor={blue500} />}
                    rightIcon={<ActionInfo/>}
                    primaryText={d.addr}
                    secondaryText={d.time}
                    onClick={() => this.sss(index)}
                  />
              }
              if(d.type === 2) {
                r = 
                  <ListItem
                    key = {index}
                    leftAvatar={<Avatar icon={<ActionInfo />} backgroundColor={yellow600} />}
                    rightIcon={<ActionInfo />}
                    primaryText={d.addr}
                    secondaryText={d.time}
                    onClick={() => this.sss(index)}
                  />
              }
              return r;
            })
          }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      </List>
    );
  }
}
function select(state) {
  return {
    login: state.login
  }
}

export default connect(select)(M);
