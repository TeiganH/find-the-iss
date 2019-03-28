import React, {Component} from 'react'

class Footer extends Component{
render(){
    return(
        <footer>
            <ul>
                <li>
                    <a href="https://nasa.gov/" target="_blank" rel="noopener noreferrer">
                        <img className="NASA" src={require('./img/NASA_logo.svg')} />
                    </a>
                    <a href="http://asc-csa.gc.ca/eng" target="_blank" rel="noopener noreferrer">
                        <img className="CSA" src={require('./img/Canadian_Space_Agency_logo.svg')} />
                    </a>
                    <a href="http://www.esa.int/ESA" target="_blank" rel="noopener noreferrer">
                        <img className="ESA"src={require('./img/ESA_LOGO.svg')} />
                    </a>
                    <a href="http://global.jaxa.jp/" target="_blank" rel="noopener noreferrer">
                        <img className="JAXA" src={require('./img/Jaxa_logo.svg')} />
                    </a>
                    <a href="http://roscosmos.ru" target="_blank" rel="noopener noreferrer">
                        <img className="RCM" src={require('./img/Roscosmos_logo_en.svg')} alt="Roscosmos"/>
                    </a>
                </li>
            </ul>
        </footer>
    )
} 
    
}


export default Footer