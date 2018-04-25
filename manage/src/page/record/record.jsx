import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import './record.css'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/search';
import S from '../menu/search';
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
        search: true,
        lampid: '',
        opercode: '',
        opername: ''
      };
      componentWillMount() {
        axios.post('http://localhost:1111/lamprecord')
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
      opensearch = () => {
        this.setState({
          search: false
        })
      };
      sss = () => {
        let d = this.state.data;
        if(this.state.lampid !== '') {
          d = d.filter(t => t.lampid === this.state.lampid)
        }
        if(this.state.opercode !== '') {
          d = d.filter(t => t.opercode === this.state.opercode)
        }
        if(this.state.opername !== '') {
          d = d.filter(t => t.opername === this.state.opername)
        }
        this.setState({
          search: true,
          data: d
        })
      };
      closesearch = () => {
        this.setState({
          search: true
        })
      };
    
      render() {
        const searchdata = [
          {
            text1: '请输入设备ID',
            text2: '设备ID',
            change: (e) => this.setState({lampid:e.target.value})
          },
          {
            text1: '请输入操作人职员代码',
            text2: '操作人职员代码',
            change: (e) => this.setState({opercode:e.target.value})
          },
          {
            text1: '请输入操作人职员姓名',
            text2: '操作人职员姓名',
            change: (e) => this.setState({opername:e.target.value})
          },
        ];
        return (
          <div className="table">
            <div className="search">
                <FloatingActionButton>
                    <ContentAdd onClick={this.opensearch}/>
                </FloatingActionButton>
            </div>
            <S data={searchdata} open={this.sss} close={this.closesearch} search={this.state.search}/>
            <div className="title">处理信息记录</div>
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
                  <TableHeaderColumn tooltip="序号">序号</TableHeaderColumn>
                  <TableHeaderColumn tooltip="设备ID">设备ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="设备地址">设备地址</TableHeaderColumn>
                  <TableHeaderColumn tooltip="操作人职员代码">操作人职员代码</TableHeaderColumn>
                  <TableHeaderColumn tooltip="操作人姓名">操作人姓名</TableHeaderColumn>
                  <TableHeaderColumn tooltip="状态">状态</TableHeaderColumn>
                  <TableHeaderColumn tooltip="操作时间">操作时间</TableHeaderColumn>
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
                    <TableRowColumn>{row.opercode}</TableRowColumn>
                    <TableRowColumn>{row.opername}</TableRowColumn>
                    <TableRowColumn>{row.work}</TableRowColumn>
                    <TableRowColumn>{row.time}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>
              <TableFooter
                adjustForCheckbox={this.state.showCheckboxes}
              >
                <TableRow>
                  <TableHeaderColumn>序号</TableHeaderColumn>
                  <TableHeaderColumn>设备ID</TableHeaderColumn>
                  <TableHeaderColumn>设备地址</TableHeaderColumn>
                  <TableHeaderColumn>操作人职员代码</TableHeaderColumn>
                  <TableHeaderColumn>操作人姓名</TableHeaderColumn>
                  <TableHeaderColumn>状态</TableHeaderColumn>
                  <TableHeaderColumn>操作时间</TableHeaderColumn>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        );
      }
}

export default Errortable;
