import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import './errortable.css';
import history from '../../history';
import { error } from '../../actions';
import axios from 'axios';  
import { message } from 'antd';

class Errortable extends Component {
    state = {
        data: [],
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: true,
        showRowHover: true,
        selectable: false,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: false,
        showCheckboxes: false,
        height: '500px',
        value: 1,
      };
      componentDidMount() {
        axios.post('http://localhost:1111/errorlamp')
          .then((response) => {
            if(response.data.success === true) {
                this.setState({
                  data: response.data.data
                })
            } else {
                message.error('获取数据失败！');
            }
          })
          .catch(function (error) {
            console.log(error);
            message.error('网络连接失败！');
          });
      }
      
      render() {
        return (
          <div className="table">
            <div className="title">故障路灯信息</div>
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
              onCellClick={(rowNumber) => {this.props.dispatch(error(this.state.data[rowNumber]));history.push('/errormsg')}}
            >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}
                enableSelectAll={this.state.enableSelectAll}
              >
                <TableRow>
                  <TableHeaderColumn tooltip="序号">序号</TableHeaderColumn>
                  <TableHeaderColumn tooltip="设备ID">设备ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="设备安装地址">安装地址</TableHeaderColumn>
                  <TableHeaderColumn tooltip="设备运行状态">运行状态</TableHeaderColumn>
                  <TableHeaderColumn tooltip="故障时间">故障时间</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
              >
                {this.state.data.map( (row, index) => (
                  <TableRow key={index}>
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{row.lampid}</TableRowColumn>
                    <TableRowColumn>{row.addr}</TableRowColumn>
                    <TableRowColumn>{row.state}</TableRowColumn>
                    <TableRowColumn>{row.errortime}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>
              <TableFooter
                adjustForCheckbox={this.state.showCheckboxes}
              >
                <TableRow>
                  <TableHeaderColumn>序号</TableHeaderColumn>
                  <TableHeaderColumn>设备ID</TableHeaderColumn>
                  <TableHeaderColumn>安装地址</TableHeaderColumn>
                  <TableHeaderColumn>运行状态</TableHeaderColumn>
                  <TableHeaderColumn>故障时间</TableHeaderColumn>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        );
      }
}

export default connect()(Errortable);
