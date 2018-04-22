import React, { Component } from 'react';
import './search.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Search extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="searchbox animated bounceInRight" style={{display: this.props.search ? 'none' : 'block'}}>
                <div className="top"></div>
                {
                   this.props.data.map((d,index) => 
                   <div className="searchboxinput" key={index}>
                       <TextField
                           hintText={d.text1}
                           floatingLabelText={d.text2}
                           fullWidth={true}
                           onChange={d.change}
                       />
                   </div>     
                    )
                }  
                <br />
                <br />
                <div className="searchbutton">
                    <RaisedButton label="关闭" primary={true} style={{width: '48%',margin: '1%'}} onClick={this.props.close}/>
                    <RaisedButton label="搜索" primary={true} style={{width: '48%',margin: '1%'}} onClick={this.props.open}/>
                </div>
            </div>              
        </MuiThemeProvider>
    );
  }
}

export default Search;
