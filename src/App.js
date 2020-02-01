import React from 'react';
import './App.scss';
import Header from "./HeaderApp.js";
import Citie from "./CitieInfo.js";
import Dropdown from "./DropdownMenu.js"
import fetchData from './fetchData';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      activeSelection: "Kaikki kaupungit",
      cities: ['Tampere', 'Jyväskylä', 'Kuopio', 'Helsinki', 'Kaikki kaupungit']
    }
    this.data = new fetchData();
    this.data.getWeatherFrom('634964')
  }

  setActiveSelection = (item) => {
    this.setState({ activeSelection: item })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Dropdown cities={this.state.cities} activeSelection={this.state.activeSelection} setActive={this.setActiveSelection}/>
        <Citie/>
      </div>
    );
  }
}

export default App;
