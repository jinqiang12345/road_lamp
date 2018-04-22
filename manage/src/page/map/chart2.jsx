import React, { Component } from 'react';
import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';

const data = [{name: '正常', value: 4000}, {name: '故障', value: 300},
                  {name: '维修', value: 300}];
const COLORS = ['#0088FE', '#ff4040', '#FFBB28'];

class Chart2 extends Component {
    render() {
        return (
            <PieChart width={400} height={270} onMouseEnter={this.onPieEnter}>
                <Tooltip/>
               <Legend />
                <Pie
                    dataKey="value"
                    data={data} 
                    cx={200} 
                    cy={100} 
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
