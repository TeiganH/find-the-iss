import React, {Component} from "react";
import {Map as LeafletMap, TileLayer, Marker} from 'react-leaflet'
import L from 'leaflet'

const marker = new L.Icon({
  iconUrl: require('./img/space.svg'),
  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76]// point from which the popup should open relative to the iconAnchor
})


class Map extends Component {
  constructor(props){
    super(props)
    this.state={
      center: [0,0],
    }
  }
  
    render() {
        return (
          <div>
          <LeafletMap
            center={this.props.latlng}
            zoom={3}
            maxZoom={10}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
          >
            <TileLayer
              url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            />
            <Marker icon={marker} position={this.props.latlng} />
          </LeafletMap>

          </div>
        );
      }
}

export default Map;
