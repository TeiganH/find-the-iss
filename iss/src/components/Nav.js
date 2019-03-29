import React, {Component} from 'react'
import { Route,Link } from "react-router-dom";
import About from './About.js';
import Home from './Home.js';

class Nav extends Component{
render(){
    return(
        <nav>
            <ul><li>
                <Link to="/">Home</Link>
                <div className="infoDiv" onClick={this.props.telemetryToggler}>ISS Info</div>
                <Link to="/about">About</Link> 
             </li></ul> 
            <main>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About} />
            </main>
        </nav>
    )
} 
    
}


export default Nav