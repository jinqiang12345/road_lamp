import React, { Component } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './control.css'

const data = [
  {name: 'Page 1', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page 2', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page 3', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page 4', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page 5', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page 6', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page 7', uv: 3490, pv: 4300, amt: 2100},
  {name: 'Page 8', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page 9', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page 10', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page 11', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page 11', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page 12', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page 13', uv: 3490, pv: 4300, amt: 2100},
];
var i = 14;
var c;
const w = document.documentElement.clientWidth || document.body.clientWidth;
const h = document.documentElement.clientHeight || document.body.clientHeight;
class Control extends Component {
   state = {
     data: data,
     dis: 'block'
   }
   change = () => {
    c = setTimeout(this.adddata, 1000);
   }
   adddata = () => {
     this.setState({
       dis: 'none'
     })
     let d = this.state.data;
     d.shift();
     d.push({
       name : 'page' + i,
       uv: 2000 + Math.floor(Math.random()*2000),
       pv: 2000 + Math.floor(Math.random()*2000),
       amt: 2000 + Math.floor(Math.random()*1000)
     })
     i = i + 1;
     this.setState({
       data: d,
       dis: 'block'
     })
   } 
    render() {
      clearTimeout(c);
      this.change();
      return (
        <div className="controltable">
          <div className="controltitle">设备实时监控</div>
          <AreaChart width={w * 0.95} height={h - 200} data={this.state.data} style={{display: this.state.dis}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
            <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
          </AreaChart>
        </div>
      );
    }
}

export default Control;
