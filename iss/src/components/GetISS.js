import React, {Component} from 'react'


class GetISS extends Component {
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
    render(){
        return(
            <div>
            
            </div>  
        )
    }
}    

export default GetISS;
