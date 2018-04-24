import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import './user.css';
import axios from 'axios';  
import { message } from 'antd';
import { login } from '../../actions';
import history from '../../history';

class fixmessage extends Component {
    state = {
        fixedHeader: true,
        fixedFooter: false,
        stripedRows: true,
        showRowHover: false,
        selectable: false,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: false,
        showCheckboxes: false,
        height: '300px',
        value: 1
      };
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
        const { login } = this.props;
        return (
          <div className="table">
            <div className="title">用户信息</div>
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
            >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}
                enableSelectAll={this.state.enableSelectAll}
              >
                <TableRow>
                  <TableHeaderColumn tooltip="用户">用户</TableHeaderColumn>
                  <TableHeaderColumn tooltip="信息">信息</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
              >
                <TableRow>
                    <TableRowColumn>用户职员代码</TableRowColumn>
                    <TableRowColumn>{login.code}</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>用户姓名</TableRowColumn>
                    <TableRowColumn>{login.name}</TableRowColumn>
                </TableRow>  
                <TableRow>
                    <TableRowColumn>用户联系方式</TableRowColumn>
                    <TableRowColumn>{login.phone}</TableRowColumn>
                </TableRow>  
                <TableRow>
                    <TableRowColumn>用户状态</TableRowColumn>
                    <TableRowColumn>{login.state}</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>用户备注</TableRowColumn>
                    <TableRowColumn>{login.remark}</TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
            <div style={{position: 'relative', width: '100%', height: '80px'}}>
                <SelectField
                    floatingLabelText="修改状态"
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={{position: 'absolute', right: '120px'}}
                >
                    <MenuItem value={1} primaryText="请选择" />
                    <MenuItem value={2} primaryText="在职" />
                    <MenuItem value={3} primaryText="休假" />
                </SelectField>
                <RaisedButton label="修改状态" primary={true} style={{position: 'absolute', top: '30px', right: '10px'}} onClick={this.sss}/>
            </div>
          </div>
        );
      }
}

function select(state) {
  return {
    login: state.login
  }
}
export default connect(select)(fixmessage);
