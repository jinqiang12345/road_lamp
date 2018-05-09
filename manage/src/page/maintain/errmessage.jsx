import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  import './errortable.css';
  import history from '../../history'
  import axios from 'axios'; 
  import { message } from 'antd';

class errmessage extends Component {
    state = {
        worklist: [],
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
      componentDidMount() {
        axios.post('http://localhost:1111/workman')
          .then((response) => {
            if(response.data.success === true) {
                this.setState({
                  worklist: response.data.data
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
      handleChange = (event, index, value) => this.setState({value});

      setfix = () => {
        if(this.state.value !== 1) {
          let fd = new FormData();
          fd.append("lampid", this.props.error.lampid);
          fd.append("opercode", this.props.login.code);
          fd.append("errortime", this.props.error.errortime);
          fd.append("fixcode", this.state.value)
          axios.post('http://localhost:1111/report', fd)
            .then((response) => {
              if(response.data.success === true) {
                  message.success('申请维修成功！');
                  history.goBack();
              } else {
                  message.error('申请维修失败！');
              }
            })
            .catch(function (error) {
              console.log(error);
              message.error('网络连接失败！');
            });
        }
      }
    
      render() {
        const { error } = this.props;
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
                    <TableRowColumn>{error.lampid}</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>设备安装地址</TableRowColumn>
                    <TableRowColumn>{error.addr}</TableRowColumn>
                </TableRow>  
                <TableRow>
                    <TableRowColumn>状态</TableRowColumn>
                    <TableRowColumn>{error.state}</TableRowColumn>
                </TableRow>  
                <TableRow>
                    <TableRowColumn>设备供应商</TableRowColumn>
                    <TableRowColumn>{error.proname}</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>故障时间</TableRowColumn>
                    <TableRowColumn>{error.errortime}</TableRowColumn>
                </TableRow>    
              </TableBody>
            </Table>
            <div style={{position: 'relative', width: '100%', height: '80px'}}>
                <SelectField
                    floatingLabelText="维修人员"
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={{position: 'absolute', right: '120px'}}
                >
                    <MenuItem value={1} primaryText="请选择" />
                    {this.state.worklist.map((l, index) => 
                      <MenuItem value={l.code} primaryText={l.name} />
                    )}
                </SelectField>
                <RaisedButton label="报告维修" primary={true} style={{position: 'absolute', top: '30px', right: '10px'}} onClick={this.setfix}/>
            </div>
          </div>
        );
      }
}

function select(state) {
  return {
    error: state.error,
    login: state.login
  }
}
export default connect(select)(errmessage);
