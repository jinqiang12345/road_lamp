import React, { Component } from 'react';
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Location from 'material-ui/svg-icons/communication/location-on';
import Light from 'material-ui/svg-icons/action/lightbulb-outline';
import Pro from 'material-ui/svg-icons/communication/business';
import Time from 'material-ui/svg-icons/device/access-time';
class M extends Component {

  render() {
    const { error } = this.props;
    return (
        <List>
          <Subheader>故障路灯信息</Subheader>
          <ListItem primaryText={error.lampid} leftIcon={<Light />} />
          <ListItem primaryText={error.addr} leftIcon={<Location />} />
          <ListItem primaryText={error.proname} leftIcon={<Pro />} />
          <ListItem primaryText={error.errortime} leftIcon={<Time />} />
      </List>
    );
  }
}
function select(state) {
  return {
    error: state.error
  }
}

export default connect(select)(M);
