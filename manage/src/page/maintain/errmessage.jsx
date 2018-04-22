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

class errmessage extends Component {
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
                    <TableRowColumn>101</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>设备安装地址</TableRowColumn>
                    <TableRowColumn>101333</TableRowColumn>
                </TableRow>  
                <TableRow>
                    <TableRowColumn>状态</TableRowColumn>
                    <TableRowColumn>error</TableRowColumn>
                </TableRow>  
                <TableRow>
                    <TableRowColumn>设备供应商</TableRowColumn>
                    <TableRowColumn>101</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>故障时间</TableRowColumn>
                    <TableRowColumn>1010325</TableRowColumn>
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
                    <MenuItem value={2} primaryText="李大嘴" />
                    <MenuItem value={3} primaryText="李大嘴" />
                    <MenuItem value={4} primaryText="李大嘴" />
                    <MenuItem value={5} primaryText="李大嘴" />
                </SelectField>
                <RaisedButton label="报告维修" primary={true} style={{position: 'absolute', top: '30px', right: '10px'}}/>
            </div>
          </div>
        );
      }
}

function select(state) {
  return {
    error: state.error
  }
}
export default connect(select)(errmessage);
