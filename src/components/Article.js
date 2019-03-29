import React, { Component } from 'react'

export default class Article extends Component {
  render() {
    return (
      <article>
        The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. 
         <p /> 
          <div classname="isstelemetry">
            {this.props.isstelemetry.map((item,index)=>(
              <p key={index}>
                {item}
              </p>
            ))}
          </div>
      </article>
    )
  }
}


