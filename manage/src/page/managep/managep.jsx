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
import './managep.css';
import S from '../menu/search';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/search';
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
        code: '',
        name: ''
      };
      componentWillMount() {
        let fd = new FormData();
        fd.append("position", "管理人员");
        axios.post('http://localhost:1111/man', fd)
          .then((response) => {

            if(response.data.success) {
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
        if(this.state.code !== '') {
          d = d.filter(t => t.code === this.state.code)
        }
        if(this.state.name !== '') {
          d = d.filter(t => t.name === this.state.name)
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
            text1: '请输入管理职员代码',
            text2: '管理职员代码',
            change: (e) => this.setState({code:e.target.value})
          },
          {
            text1: '请输入管理职员姓名',
            text2: '管理职员姓名',
            change: (e) => this.setState({name:e.target.value})
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
            <div className="title">管理人员信息</div>
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
                  <TableHeaderColumn tooltip="设备管理职员代码">职员代码</TableHeaderColumn>
                  <TableHeaderColumn tooltip="设备管理职员姓名">职员姓名</TableHeaderColumn>
                  <TableHeaderColumn tooltip="设备管理人员联系方式">联系方式</TableHeaderColumn>
                  <TableHeaderColumn tooltip="设备管理人员状态">状态</TableHeaderColumn>
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
                    <TableRowColumn>{row.code}</TableRowColumn>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{row.phone}</TableRowColumn>
                    <TableRowColumn>{row.state}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>
              <TableFooter
                adjustForCheckbox={this.state.showCheckboxes}
              >
                <TableRow>
                  <TableHeaderColumn>序号</TableHeaderColumn>
                  <TableHeaderColumn>职员代码</TableHeaderColumn>
                  <TableHeaderColumn>职员姓名</TableHeaderColumn>
                  <TableHeaderColumn>联系方式</TableHeaderColumn>
                  <TableHeaderColumn>状态</TableHeaderColumn>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        );
      }
}

export default Errortable;
