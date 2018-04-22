import React, { Component } from 'react';
import { Map, Markers  } from 'react-amap';

const randomMarker = (len) => (
    Array(len).fill(true).map((e, idx) => ({
      position: {
        longitude: 100 + Math.random() * 30,
        latitude: 30 + Math.random() * 20,
      },
    }))
  );
class GdMap extends Component {
    constructor(){
        super();
        this.markers = randomMarker(1000);
        this.center = {longitude: 115, latitude: 40};
        this.state = {
          useCluster: true,
        }
      }
      toggleCluster(){
        this.setState({
          useCluster: !this.state.useCluster,
        });
      }
    render() {
        return (
            <div style={{width: '100%', height: '570px'}}>
                <Map amapkey={'b47cad6ea2ab6d5d7aebde791cdaa28f'} plugins={['ToolBar']} center={this.center} zoom={5}>
                    <Markers 
                        markers={this.markers}
                        useCluster={this.state.useCluster}
                    />
                </Map>
            </div>
        );
    }
}

export default GdMap;
