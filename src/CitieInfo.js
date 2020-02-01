import React from 'react';
import './App.scss';

class CitieInfo extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="card">
        <div className="container">
          <div className="bigBox">
            <div className="topbox">
              <div className="leftItem">
                <p className="bigText">kaupunki</p>
                <p className="smallText">info1</p>
              </div>
              <div className="iconBox">
                <p style={{margin: 0}}>kuva</p>
                <p style={{margin: 0}}>0C</p>
              </div>
            </div>
            <div className="bottombox">
              <div className="leftItem">
                <p className="bigText" style={{ fontSize: '15px'}}>date</p>
                <p className="smallText">time</p>
              </div>
              <div className="rightItem">
                <p className="smallText">wind</p>
                <p className="smallText">humidity</p>
                <p className="smallText">precipitation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CitieInfo;
