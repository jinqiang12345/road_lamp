import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import moment from 'moment';
import axios from 'axios';
import { message } from 'antd';

const w = document.documentElement.clientWidth || document.body.clientWidth;
const h = document.documentElement.clientHeight || document.body.clientHeight;
class Chart1 extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        axios.post('http://localhost:1111/data')
          .then((response) => {
            if(response.data.success) {
                let da = response.data.countrecord;
                let d = [];
                for(let i = 0; i < da.length; i++) {
                    let temp = {};
                    temp.name = da[i].time;
                    temp.故障 = da[i].error;
                    temp.维修 = da[i].fix;
                    d.unshift(temp);
                }
                let today = {};
                today.name = moment().format('YYYY-MM-DD').toString();
                today.故障 = response.data.errorcount;
                today.维修 = response.data.fixcount;
                d.push(today);
                this.setState({
                    data: d
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
            <LineChart width={w * 0.95 * 0.3} height={h * 0.5 - 100} data={this.state.data}>
               <XAxis dataKey="name"/>
               <YAxis/>
               <CartesianGrid strokeDasharray="3 3"/>
               <Tooltip/>
               <Legend />
               <Line type="monotone" dataKey="故障" stroke="#ff4040" />
               <Line type="monotone" dataKey="维修" stroke="#FFBB28" />
            </LineChart>
        );
    }
}

export default Chart1;
