import React from 'react';
import './App.scss';

class weatherData {
  constructor(info) {
    var moment = require('moment');

    this.desc = info.weather[0].description
    this.temp = info.main.temp
    let dateRaw = new Date(info.dt * 1000)
    this.date = moment(dateRaw).format("MMM Do");
    this.time = dateRaw.getHours() + ':00'
    this.wind = info.wind.speed
    this.humid = info.main.humidity
    let pre = null
    if (info.rain) {
      let i = info.rain
      let json = JSON.stringify(i)
      let result = json.replace("}","")
      let final = result.split(":")
      pre = final[1]
    }
    this.pre = pre
    this.image = "http://openweathermap.org/img/wn/"+ info.weather[0].icon +"@2x.png"
  }
}

class CitieInfo extends React.Component {

  constructor(props) {
    super(props);
    this.test = new weatherData(props.data.list[0])
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
        <div className="card" style={{ width: '100%' }}>
          <div className="container">
            <div className="bigBox">
              <div className="topbox">
                <div className="leftItem">
                  <p className="bigText">{this.props.data.city.name}</p>
                  <p className="smallText">{this.test.desc.charAt(0).toUpperCase() + this.test.desc.slice(1)}</p>
                </div>
                <div className="iconBox">
                  <img src={this.test.image} alt="weather"/>
                  <p style={{ margin: 0 }}>{this.test.temp}&deg;C</p>
                </div>
              </div>
              <div className="bottombox">
                <div className="leftItem">
                  <p className="bigText" style={{ fontSize: '15px' }}>{this.test.date}</p>
                  <p className="smallText">{this.test.time}</p>
                </div>
                <div className="rightItem">
                  <p className="smallText">Wind: {this.test.wind} m/s</p>
                  <p className="smallText">Humidity: {this.test.humid} %</p>
                  {this.test.pre ? (
                    <p className="smallText">Precipitation (3 h): {this.test.pre} mm</p>
                  ) : (
                    null
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="card" style={{ marginRight: '12px' }}>asd</div>
          <div className="card" style={{ marginRight: '12px' }}>qwe</div>
          <div className="card" style={{ marginRight: '12px' }}>zxc</div>
          <div className="card" style={{ marginRight: '12px' }}>fgh</div>
          <div className="card">rty</div>
        </div>
      </div>
    );
  }
}

export default CitieInfo;
