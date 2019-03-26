import React, {Component} from "react";
import {Map as LeafletMap, TileLayer, Marker} from 'react-leaflet'
// import L from "leaflet";


class Map extends Component {
    render() {
        return (
          <LeafletMap
            center={[0, 0]}
            zoom={1}
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
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={this.props.latlng}/> 
          </LeafletMap>
        );
      }
}

export default Map;
