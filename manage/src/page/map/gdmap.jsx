import React, { Component } from 'react';
import { Map, Markers  } from 'react-amap';
import axios from 'axios';
import { message } from 'antd';

const randomMarker = (len) => (
    Array(len).fill(true).map((e, idx) => ({
      position: {
        longitude: 100 + Math.random() * 30,
        latitude: 30 + Math.random() * 20,
      },
    }))
  );
const h = document.documentElement.clientHeight || document.body.clientHeight;
class GdMap extends Component {
    constructor(){
        super();
        this.markers = randomMarker(1000);
        this.center = {longitude: 115, latitude: 40};
        this.state = {
          data: []
        }
      }
      componentWillMount() {
        axios.post('http://localhost:1111/position')
        .then((response) => {
          if(response.data.success) {
              let res = response.data.data;
              let d = [];
              for(let i = 0; i < res.length; i++) {
                let temp = {};
                let position = {};
                position.longitude = res[i].longitude;
                position.latitude = res[i].latitude;
                temp.position = position;
                d.push(temp);
              }
              console.log(d);
              this.setState({
                data: d
              });
          } else {
              message.error('获取数据失败！');
          }
        })
        .catch(function (error) {
          console.log(error);
          message.error('网络连接失败！');
        });             
      }
      toggleCluster(){
        this.setState({
          useCluster: !this.state.useCluster,
        });
      }
    render() {
      console.log(this.markers);
        return (
            <div style={{width: '100%', height: h - 170 + 'px'}}>
                <Map amapkey={'b47cad6ea2ab6d5d7aebde791cdaa28f'} plugins={['ToolBar']} center={this.center} zoom={5}>
                    <Markers 
                        markers={this.state.data}
                    />
                </Map>
            </div>
        );
    }
}

export default GdMap;
