import React from 'react';
import './App.scss';
import Header from "./HeaderApp.js";
import Citie from "./CitieInfo.js";
import Dropdown from "./DropdownMenu.js"
import text from "./AppId.js";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      activeSelection: "Kaikki kaupungit",
      cities: ['Tampere', 'Jyväskylä', 'Kuopio', 'Helsinki', 'Kaikki kaupungit'],
      citiesInfo: [
        { id: '634964', citiesData: [] },
        { id: '655195', citiesData: [] },
        { id: '650225', citiesData: [] },
        { id: '658225', citiesData: [] }
      ],
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    let i = 0;
    for (i; i < this.state.citiesInfo.length; i++) {
      const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + this.state.citiesInfo[i].id + '&units=metric&cnt=6&APPID=' + text)
      const json = await response.json()
      let citie = this.state.citiesInfo
      citie[i].citiesData = json
      this.setState({ citiesInfo: citie })
    }
    this.setState({loading: false})
    console.log(this.state)
  }


  setActiveSelection = (item) => {
    this.setState({ activeSelection: item })
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="App">
          <Header />
          <Dropdown cities={this.state.cities} activeSelection={this.state.activeSelection} setActive={this.setActiveSelection} />
        </div>
      )
    }
    return (
      <div className="App">
        <Header />
        <div style={{ width: '90%' }}>
          <Dropdown cities={this.state.cities} activeSelection={this.state.activeSelection} setActive={this.setActiveSelection} />
          {this.state.citiesInfo.map(item => (
            <Citie key={item.id} data={item.citiesData} />
          ))}
        </div>
      </div>
    );
  }
}
/*
  {this.state.citiesInfo.map(item => (
            <Citie key={item.id} data={item.citiesData} />
          ))}
*/

export default App;
