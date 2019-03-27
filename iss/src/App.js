import React, { Component } from 'react';
// import { Route,Link } from "react-router-dom";
import Map from './components/Map.js'
// import GetISS from './components/GetISS.js'
import './App.css';
import Nav from './components/Nav.js'
import Footer from './components/Footer.js'

// Map provided by leaflet.js


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      lat: '',
      lng: '',
      position: [],
    }
  }

  getISS(){
    fetch('http://api.open-notify.org/iss-now.json')
    .then(response=>response.json())
    .then(json=>{
        this.setState({
            lat: json.iss_position.latitude,
            lng: json.iss_position.longitude,
        })
    }) 
  }
  render() {
    let position = [this.state.lat, this.state.lng]
  return (
      <div className="App">
        <nav>
          <Nav />
         </nav>
        <div className= "buttonDiv">
          <button onClick={()=>this.getISS()}>Find the ISS</button>
        <div className="mapDiv">
            <Map latlng={position}/>
        </div>
        <Footer />
        </div>

      </div>
  )
    
   }}
export default App;
