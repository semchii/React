import React from "react";

class Weather extends React.Component {
    render() {
        return(
           <div>
               { this.props.city &&
                   <div className="infoWeath">
                       <p>Місцезнаходження: {this.props.city}, {this.props.country}</p>
                       <p>Температура: {this.props.temp}</p>
                       <p>Схід сонця: {this.props.sunrise}</p>
                       <p>Захід сонця: {this.props.sunset}</p>
                   </div>
               }
               <p className="error">{ this.props.error }</p>
           </div>
        );
    }
}
export default Weather;