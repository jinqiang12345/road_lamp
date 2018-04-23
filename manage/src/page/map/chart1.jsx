import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
    {name: '2018-04-21', 故障: 6, 维修中: 10},
    {name: '2018-04-22', 故障: 9, 维修中: 11},
    {name: '2018-04-23', 故障: 3, 维修中: 12},
    {name: '2018-04-24', 故障: 1, 维修中: 9},
    {name: '2018-04-25', 故障: 2, 维修中: 14},
    {name: '2018-04-26', 故障: 0, 维修中: 20},
    {name: '2018-04-27', 故障: 6, 维修中: 5},
];
const w = document.documentElement.clientWidth || document.body.clientWidth;
const h = document.documentElement.clientHeight || document.body.clientHeight;
class Chart1 extends Component {
    render() {
        return (
            <LineChart width={w * 0.95 * 0.3} height={h * 0.5 - 100} data={data}>
               <XAxis dataKey="name"/>
               <YAxis/>
               <CartesianGrid strokeDasharray="3 3"/>
               <Tooltip/>
               <Legend />
               <Line type="monotone" dataKey="故障" stroke="#ff4040" />
               <Line type="monotone" dataKey="维修中" stroke="#FFBB28" />
            </LineChart>
        );
    }
}

export default Chart1;
