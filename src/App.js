import React from 'react';
import './App.scss';
import Header from "./HeaderApp.js";
import Citie from "./CitieInfo.js";
import Dropdown from "./DropdownMenu.js"
import fetchData from './fetchData';

class App extends React.Component {

  constructor() {
    super();
    this.data = new fetchData();
    this.data.getWeatherFrom('634964')
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Dropdown/>
        <Citie/>
      </div>
    );
  }
}

export default App;
