import React, { Component } from 'react';
import { Route,Link } from "react-router-dom";
import About from './components/About.js';
import Home from './components/Home.js';
import Map from './components/Map.js'
// import GetISS from './components/GetISS.js'
import './App.css';

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
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        
        <main>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
        </main>
        
        <div>
          <button onClick={()=>this.getISS()}>Find the ISS</button>
        
          <div>
            <Map latlng={position}/>
          </div>
        </div>

      </div>
  )
    
   }}
export default App;
