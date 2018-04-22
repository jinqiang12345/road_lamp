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
          fd.append("id", this.props.login.id);
          if(this.state.value === 2) {
            fd.append("state", "在职");
          }
          if(this.state.value === 3) {
            fd.append("state", "休假");
          }
          axios.post('/user', fd)
            .then(function (response) {
              if(response.data.success === true) {
                  message.success('修改状态成功！');
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
                    <TableRowColumn>101</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>用户姓名</TableRowColumn>
                    <TableRowColumn>101333</TableRowColumn>
                </TableRow>  
                <TableRow>
                    <TableRowColumn>用户联系方式</TableRowColumn>
                    <TableRowColumn>error</TableRowColumn>
                </TableRow>  
                <TableRow>
                    <TableRowColumn>用户状态</TableRowColumn>
                    <TableRowColumn>101</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>用户备注</TableRowColumn>
                    <TableRowColumn>1010325</TableRowColumn>
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
                <RaisedButton label="修改状态" primary={true} style={{position: 'absolute', top: '30px', right: '10px'}}/>
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
