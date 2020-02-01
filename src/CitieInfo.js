import React from 'react';
import './App.scss';
import SmallWeather from "./SmallWeather.js"

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
      let result = json.replace("}", "")
      let final = result.split(":")
      pre = final[1]
    }
    this.pre = pre
    this.image = info.weather[0].icon
  }
}

class CitieInfo extends React.Component {

  constructor(props) {
    super(props);
    let list = []
    props.data.list.map(item => list.push(new weatherData(item)))
    this.list = list
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="card">
          <div className="container">
            <div className="bigBox">
              <div className="topbox">
                <div className="leftItem">
                  <p className="bigText">{this.props.data.city.name}</p>
                  <p className="smallText">{this.list[0].desc.charAt(0).toUpperCase() + this.list[0].desc.slice(1)}</p>
                </div>
                <div className="iconBox">
                  <img src={"http://openweathermap.org/img/wn/" + this.list[0].image + "@2x.png"} alt="weather" />
                  <p style={{ margin: 0 }}>{this.list[0].temp}&deg;C</p>
                </div>
              </div>
              <div className="bottombox">
                <div className="leftItem">
                  <p className="bigText" style={{ fontSize: '15px' }}>{this.list[0].date}</p>
                  <p className="smallText">{this.list[0].time}</p>
                </div>
                <div className="rightItem">
                  <p className="smallText">Wind: {this.list[0].wind} m/s</p>
                  <p className="smallText">Humidity: {this.list[0].humid} %</p>
                  {this.list[0].pre ? (
                    <p className="smallText">Precipitation (3 h): {this.list[0].pre} mm</p>
                  ) : (
                      null
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          {this.list.slice(1, -1).map((data, index) => (
            <SmallWeather key={index} data={data} last={false}/>
          ))}
          <SmallWeather data={this.list[this.list.length-1]} last={true}/>
        </div>
      </div>
    );
  }
}

export default CitieInfo;
