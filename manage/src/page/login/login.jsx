import React, { Component } from 'react';
import { connect } from 'react-redux'
import './login.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import { login } from '../../actions';
import history from '../../history';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { message } from 'antd';

const cookies = new Cookies()

class Login extends Component {
    state = {
        logname: '',
        pwd: '',
        rem: false
    }
    componentDidMount() {
        console.log(cookies.get("roadlogname"))
        this.setState({
            logname: cookies.get("roadlogname") || '',
            pwd: cookies.get("roadpwd") || '',
            rem: cookies.get("roadrem") === 'true' ? true : false
        })
    }
    loginin = () => {
        let fd = new FormData();
        fd.append("logname", this.state.logname);
        fd.append("pwd", this.state.pwd);
        axios.post('/user', fd)
          .then(function (response) {
            if(response.data.success === true) {
                this.props.dispatch(login(response.data.data));
                message.success('欢迎您！' + response.data.data.logname);
                if(this.state.rem) {
                    cookies.set("roadlogname", this.state.logname, {maxAge: 30*24*60*60})
                    cookies.set("roadpwd", this.state.pwd, {maxAge: 30*24*60*60})
                    cookies.set("roadrem", this.state.rem, {maxAge: 30*24*60*60})
                } else {
                    cookies.set("roadlogname", "", {maxAge: 30*24*60*60})
                    cookies.set("roadpwd", "", {maxAge: 30*24*60*60})
                    cookies.set("roadrem", false, {maxAge: 30*24*60*60})
                }
                history.push('/chart')
            } else {
                message.error('用户名或密码错误！');
            }
          })
          .catch(function (error) {
            console.log(error);
            message.error('网络连接失败！');
          });
    }
    render() {
        return (
            <MuiThemeProvider>
                <div className="login">
                    <div className="jin">
                        <div className="ltitle">远程路灯监控管理系统</div>
                        <div className="input">
                            <TextField
                                value={this.state.logname}
                                hintText="请输入用户名"
                                floatingLabelText="用户名"
                                fullWidth={true}
                                onChange = {(e) => this.setState({logname: e.target.value})}
                            />
                        </div>
                        <div className="input">
                            <TextField
                                value={this.state.pwd}
                                hintText="请输入密码"
                                floatingLabelText="密码"
                                fullWidth={true}
                                type='password'
                                onChange = {(e) => this.setState({pwd: e.target.value})}
                            />
                        </div>
                        <div className="remember">
                            <Checkbox
                                checked={this.state.rem}
                                label="记住密码"
                                onCheck = {(e, isInputChecked) => this.setState({rem: isInputChecked})}

                            />
                        </div>
                        <div className="button">
                            <RaisedButton label="登 录" onClick={this.loginin} labelStyle={{color: 'rgb(0, 188, 212)', fontSize: '14px'}} style={{width: '100%'}}/>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect()(Login);
