import React from 'react';
import './App.scss';

class SmallWeather extends React.Component {

  render() {
    if(this.props.last) {
      return (
        <div className="card" style={{color: '#70757A', width: '100%'}}>
          <div>
            <p style={{fontSize: '13px'}}>{this.props.data.time}</p>
            <img src={"http://openweathermap.org/img/wn/" + this.props.data.image + ".png"} alt="weather" />
            <p style={{fontSize: '15px'}}>{this.props.data.temp}&deg;C</p>
          </div>
          <div style={{fontSize: '10px', backgroundColor: "#E5F6FD", borderTop: '2px solid #E6E6E6'}}>
            <p>{this.props.data.wind} m/s</p>
            <p>{this.props.data.humid} %</p>
            <p style={{margin: 0, paddingBottom: '10px'}}>{this.props.data.pre} mm</p>
          </div>
        </div>
      );
    }
    return (
      <div className="card" style={{color: '#70757A', marginRight: '16px' , width: '100%'}}>
        <div>
          <p style={{fontSize: '13px'}}>{this.props.data.time}</p>
          <img src={"http://openweathermap.org/img/wn/" + this.props.data.image + ".png"} alt="weather" />
          <p style={{fontSize: '15px'}}>{this.props.data.temp}&deg;C</p>
        </div>
        <div style={{fontSize: '10px', backgroundColor: "#E5F6FD", borderTop: '2px solid #E6E6E6'}}>
          <p>{this.props.data.wind} m/s</p>
          <p>{this.props.data.humid} %</p>
          <p style={{margin: 0, paddingBottom: '10px'}}>{this.props.data.pre} mm</p>
        </div>
      </div>
    );
  }
}

export default SmallWeather;
