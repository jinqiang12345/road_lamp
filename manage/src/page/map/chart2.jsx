import React, { Component } from 'react';
import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';
import axios from 'axios';
import { message } from 'antd';

const COLORS = ['#0088FE', '#ff4040', '#FFBB28'];
const w = document.documentElement.clientWidth || document.body.clientWidth;
const h = document.documentElement.clientHeight || document.body.clientHeight;
class Chart2 extends Component {
    state = {
        ok: 0,
        error: 0,
        fix: 0
    }
    componentWillMount() {
        axios.post('http://localhost:1111/data')
          .then((response) => {
            if(response.data.success) {
                this.setState({
                    ok: response.data.okcount,
                    error: response.data.errorcount,
                    fix: response.data.fixcount
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
        const data = [{name: '正常', value: this.state.ok}, {name: '故障', value: this.state.error},
                  {name: '维修', value: this.state.fix}];
        return (
            <PieChart width={w * 0.95 * 0.3} height={h * 0.5 - 100} onMouseEnter={this.onPieEnter}>
                <Tooltip/>
               <Legend />
                <Pie
                    dataKey="value"
                    data={data} 
                    cx={(w * 0.95 * 0.3) / 2} 
                    cy={(h * 0.5 - 100) / 2} 
                    innerRadius={60}
                    outerRadius={80} 
                    fill="#8884d8"
                    paddingAngle={5}
                >
                    {
                        data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                    }
                </Pie>
            </PieChart>
        );
    }
}

export default Chart2;
