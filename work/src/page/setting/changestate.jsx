import React, { Component } from 'react';
import { connect } from 'react-redux';
import './changepwd.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';  
import { message } from 'antd';
import history from '../../history';
import { login } from '../../actions';

class Changestate extends Component {
    state = {
        value: 1
    }
    handleChange = (event, index, value) => this.setState({value});
    sss = () => {
        if(this.state.value === 1) {
          message.info('请选择修改状态！');
        } else {
          let fd = new FormData();
          fd.append("code", this.props.login.code);
          let temp = '';
          if(this.state.value === 2) {
            temp = '在职';
          }
          if(this.state.value === 3) {
            temp = '休假';
          }
          fd.append("state", temp);
          axios.post('http://localhost:1111/changestate', fd)
            .then((response) => {
              if(response.data.success) {
                  message.success('修改状态成功！');
                  this.props.dispatch(login({...this.props.login, state: temp}));
                  history.goBack();
              } else {
                  message.error('修改状态失败！');
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
                    <div className="ptitle">修改工作状态</div>
                    <div className="input">
                        <SelectField
                            floatingLabelText="修改状态"
                            value={this.state.value}
                            onChange={this.handleChange}
                            style={{width: '100%'}}
                        >
                            <MenuItem value={1} primaryText="请选择" />
                            <MenuItem value={2} primaryText="在职" />
                            <MenuItem value={3} primaryText="休假" />
                        </SelectField>
                    </div>
                    <br />
                    <br />
                    <div className="button">
                        <RaisedButton label="修 改" primary="true" style={{width: '100%'}} onClick={this.sss}/>
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
export default connect(select)(Changestate);
