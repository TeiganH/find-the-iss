import React, {Component} from "react";
import {Map as LeafletMap, TileLayer, Marker} from 'react-leaflet'
import L from 'leaflet'


class Map extends Component {
  constructor(props){
    super(props)
    this.state={
      center: [0,0],
    }
  }
  centerLeafletMapOnMarker(center, marker){
    let latLngs = [marker.gatLatLng()]
    let markerBounds = L.latLngBounds(latLngs)
    center.fitBounds(markerBounds)
  }
    render() {
        return (
          <div>
          <LeafletMap
            center={this.props.latlng}
            zoom={6}
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

          </div>
        );
      }
}

export default Map;
