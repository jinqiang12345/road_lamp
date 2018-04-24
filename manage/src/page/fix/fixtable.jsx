import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import './fixtable.css';
import history from '../../history';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/search';
import S from '../menu/search';
import { fix } from '../../actions';
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
        search: true,
        lampid: '',
        fixcode:'',
        fixname:''
      };
      componentDidMount() {
        axios.post('http://localhost:1111/fixlamp')
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
        console.log(this.state.id);
        let d = this.state.data;
        if(this.state.lampid !== '') {
          d = d.filter(t => t.lampid === this.state.lampid)
        }
        if(this.state.fixcode !== '') {
          d = d.filter(t => t.fixcode === this.state.fixcode)
        }
        if(this.state.fixname !== '') {
          d = d.filter(t => t.fixname === this.state.fixname)
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
            text1: '请输入维修职员代码',
            text2: '维修职员代码',
            change: (e) => this.setState({fixcode:e.target.value})
          },
          {
            text1: '请输入维修职员姓名',
            text2: '维修职员姓名',
            change: (e) => this.setState({fixname:e.target.value})
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
            <div className="title">故障路灯信息</div>
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
              onCellClick={(rowNumber) => {this.props.dispatch(fix(this.state.data[rowNumber]));history.push('/fixmsg')}}
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
                  <TableHeaderColumn tooltip="维修职员代码">维修职员代码</TableHeaderColumn>
                  <TableHeaderColumn tooltip="维修职员姓名">维修职员姓名</TableHeaderColumn>
                  <TableHeaderColumn tooltip="维修状态">维修状态</TableHeaderColumn>
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
                    <TableRowColumn>{row.fixcode}</TableRowColumn>
                    <TableRowColumn>{row.fixname}</TableRowColumn>
                    <TableRowColumn>{row.state}</TableRowColumn>
                  </TableRow>
                  ))}
              </TableBody>
              <TableFooter
                adjustForCheckbox={this.state.showCheckboxes}
              >
                <TableRow>
                  <TableHeaderColumn >序号</TableHeaderColumn>
                  <TableHeaderColumn >设备ID</TableHeaderColumn>
                  <TableHeaderColumn >安装地址</TableHeaderColumn>
                  <TableHeaderColumn >维修职员代码</TableHeaderColumn>
                  <TableHeaderColumn >维修职员姓名</TableHeaderColumn>
                  <TableHeaderColumn >维修状态</TableHeaderColumn>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        );
      }
}

export default connect()(Errortable);
