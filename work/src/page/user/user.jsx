import React, { Component } from 'react';
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import PersonAdd from 'material-ui/svg-icons/action/account-circle';
import ContentInbox from 'material-ui/svg-icons/action/perm-identity';
import ActionGrade from 'material-ui/svg-icons/action/code';
import ContentSend from 'material-ui/svg-icons/communication/phone';
import ContentDrafts from 'material-ui/svg-icons/action/work';

class U extends Component {

  render() {
    return (
        <List>
            <ListItem primaryText={ this.props.login.logname } leftIcon={<PersonAdd />} />
            <ListItem primaryText={ this.props.login.name } leftIcon={<ContentInbox />} />
            <ListItem primaryText={ this.props.login.code } leftIcon={<ActionGrade />} />
            <ListItem primaryText={ this.props.login.phone } leftIcon={<ContentSend />} />
            <ListItem primaryText={ this.props.login.state } leftIcon={<ContentDrafts />} />
        </List>
    );
  }
}
function select(state) {
  return {
    login: state.login
  }
}

export default connect(select)(U);
