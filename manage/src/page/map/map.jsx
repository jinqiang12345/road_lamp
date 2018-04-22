import React, { Component } from 'react';
import './map.css'
import GdMap from './gdmap'
import Chart1 from './chart1'
import Chart2 from './chart2'

class Map extends Component {
  render() {
    return (
     <div className="box">
        <div className="box1">
            <div>
                <div className="boxtitle">近7日设备情况</div>
                <Chart1 />
            </div>
            <div>
                <div className="boxtitle">设备状态</div>
                <Chart2 />
            </div>
        </div>
        <div className="box2">
            <div className="boxtitle" style={{width: '860px'}}>设备分布位置</div>
            <GdMap />
        </div>
     </div>
    );
  }
}

export default Map;
