import React, {Component} from 'react'

class About extends Component {

  render() {
    return (
      <div>
        <p>Where is ISS is made by Teigan Hockman, full-stack software engineer student at <a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">General Assembly NYC</a>.</p>
        <ul>
          Resources used: 
          <li><a href="https://react-leaflet.js.org/" target="_blank" rel="noopener noreferrer">React-Leaflet</a></li>
          <li><a href="http://animista.net/Animista" target="_blank" rel="noopener noreferrer">Animista</a></li>
          <li><a href="http://api.open-notify.org/iss-now.json" target="_blank" rel="noopener noreferrer">ISS Now API</a></li>
          <li><a href="https://api.wheretheiss.at/v1/satellites/25544" target="_blank" rel="noopener noreferrer">Where the ISS API</a></li>
        </ul>
      </div>
    )
  }
}

export default About