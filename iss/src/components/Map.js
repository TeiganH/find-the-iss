import React from "react";
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet'
import L from "leaflet";


class Map extends React.Component {
    render() {
        return (
          <LeafletMap
            center={[50, 10]}
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
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={[74.0060, 40.7128
        ]}>
              <Popup>
                Popup for any custom information.
              </Popup>
            </Marker>
          </LeafletMap>
        );
      }
}

export default Map;
