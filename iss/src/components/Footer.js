import React, {Component} from 'react'

class Footer extends Component{
render(){
    return(
        <footer>
            <ul><li>
            <img className="NASA" src={require('./img/NASA_logo.svg')} />
            <img className="CSA" src={require('./img/Canadian_Space_Agency_logo.svg')} />
            <img className="ESA"src={require('./img/ESA_LOGO.svg')} />
            <img className="JAXA" src={require('./img/Jaxa_logo.svg')} />
            <img className="RCM" src={require('./img/Roscosmos_logo_en.svg')} />
            </li></ul>
        </footer>
    )
} 
    
}


export default Footer