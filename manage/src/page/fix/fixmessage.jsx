import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import RaisedButton from 'material-ui/RaisedButton';
  import './fixtable.css';
  import axios from 'axios';
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
        height: '410px',
        disable: false
      };
      setfix = () => {
        let fd = new FormData();
          fd.append("lampid", this.props.fix.lampid);
          fd.append("opercode", this.props.login.code);
          fd.append("errortime", this.props.fix.errortime);
          fd.append("fixcode", this.props.fix.fixcode)
          axios.post('http://localhost:1111/remind', fd)
            .then((response) => {
              if(response.data.success === true) {
                  message.success('提醒成功！');
                  this.setState({disable: true});
              } else {
                  message.error('提醒失败！');
              }
            })
            .catch(function (error) {
              console.log(error);
              message.error('网络连接失败！');
            }); 
      }
      handleChange = (event, index, value) => this.setState({value});
    
      render() {
        const { fix } = this.props;
        return (
          <div className="table">
            <div className="title">故障路灯信息</div>
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
                  <TableHeaderColumn tooltip="设备">设备</TableHeaderColumn>
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
                    <TableRowColumn>设备ID</TableRowColumn>
                    <TableRowColumn>{fix.lampid}</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>设备安装地址</TableRowColumn>
                    <TableRowColumn>{fix.addr}</TableRowColumn>
                </TableRow>  
                <TableRow>
                    <TableRowColumn>状态</TableRowColumn>
                    <TableRowColumn>{fix.state}</TableRowColumn>
                </TableRow>  
                <TableRow>
                    <TableRowColumn>设备供应商</TableRowColumn>
                    <TableRowColumn>{fix.proname}</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>故障时间</TableRowColumn>
                    <TableRowColumn>{fix.errortime}</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>维修职员代码</TableRowColumn>
                    <TableRowColumn>{fix.fixcode}</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>维修职员姓名</TableRowColumn>
                    <TableRowColumn>{fix.fixname}</TableRowColumn>
                </TableRow>   
              </TableBody>
            </Table>
            <div style={{position: 'relative', width: '100%', height: '80px'}}>
                <RaisedButton label="提醒" primary={true} style={{position: 'absolute', top: '30px', right: '10px'}} onClick={this.setfix} disabled={this.state.disable}/>
            </div>
          </div>
        );
      }
}

function select(state) {
  return {
    fix: state.fix,
    login: state.login
  }
}
export default connect(select)(fixmessage);
