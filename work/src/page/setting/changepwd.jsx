import React, { Component } from 'react';
import { connect } from 'react-redux';
import './changepwd.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';  
import { message } from 'antd';
import history from '../../history';
import { loginout } from '../../actions';

class Changepwd extends Component {
    state = {
        oldpwd: '',
        newpwd: '',
        confirmpwd: ''
    }
    sss = () => {
        if(this.state.newpwd !== this.state.confirmpwd) {
            message.info("确认密码不一致！")
        } else {
            let fd = new FormData();
            fd.append("logname", this.props.login.logname);
            fd.append("oldpwd", this.state.oldpwd);
            fd.append("newpwd", this.state.newpwd);
            axios.post('http://localhost:1111/changeworkpwd', fd)
            .then((response) => {
              if(response.data.success) {
                  message.success('修改密码成功！');
                  this.props.dispatch(loginout());
                  history.push('/')
              } else {
                  message.error('修改密码失败！');
              }
            })
            .catch(function (error) {
              console.log(error);
              message.error('网络连接失败！');
            });
        }
    }
  render() {
    return (
        <MuiThemeProvider>
            <div>
                <div className="change">
                    <div className="ptitle">修改登录密码</div>
                    <div className="input">
                        <TextField
                            hintText="请输入原密码"
                            floatingLabelText="原密码"
                            fullWidth={true}
                            onChange = {(e) => this.setState({oldpwd: e.target.value})}
                        />
                    </div>
                    <div className="input">
                        <TextField
                            hintText="请输入新密码"
                            floatingLabelText="新密码"
                            fullWidth={true}
                            type='password'
                            onChange = {(e) => this.setState({newpwd: e.target.value})}
                        />
                    </div>
                    <div className="input">
                        <TextField
                            hintText="请确认密码"
                            floatingLabelText="确认密码"
                            fullWidth={true}
                            type='password'
                            onChange = {(e) => this.setState({confirmpwd: e.target.value})}
                        />
                    </div>
                    <br />
                    <br />
                    <div className="button">
                        <RaisedButton label="修 改" primary={true} style={{width: '100%'}} onClick={this.sss}/>
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

function select(state) {
    return {
        login: state.login
    }
}
export default connect(select)(Changepwd);
