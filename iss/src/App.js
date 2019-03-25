import React, { Component } from 'react';
import { Route,Link } from "react-router-dom";
import About from './components/About.js'
import Home from './components/Home.js'
import './App.css'
// import {css} from 'https://unpkg.com/leaflet@1.4.0/dist/leaflet.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

  getISS(){
    fetch('http://api.open-notify.org/iss-now.json')
    .then(response=>response.json())
    .then(json=>{
      this.setState({
        latitude: json.iss_position.latitude,
        longitude: json.iss_position.longitude,
      })
    }) 
  }

  render() {
  
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
        <Route path="/about" component={About}/>
      </main>
        <button onClick={()=>this.getISS()}>Find the ISS</button>
        <div>
          <h2>{this.state.latitude}</h2>
          <h2>{this.state.longitude}</h2>
        </div>
      </div>
    )
    }
}

export default App;
