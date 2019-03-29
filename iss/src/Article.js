import React, { Component } from 'react'

export default class Article extends Component {
  render() {
    return (
      <article>
        The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. 
          <div classname="isstelemetry">
            {isstelemetry.map((item,index)=>(
              <p key={index}>
                {item}
              </p>
            ))}
          </div>
      </article>
    )
  }
}


