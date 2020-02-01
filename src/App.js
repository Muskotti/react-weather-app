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
        { id: '634964', citiesData: [] }
      ],
    }
  }

  async componentDidMount() {
    let id = '634964'
    let responce = await fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + id + '&units=metric&cnt=6&APPID=' + text)
    let json = await responce.json()
    let citie = this.state.citiesInfo
    citie[0].citiesData = json
    this.setState({ citiesInfo: citie, loading: false }, () => console.log(this.state))
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
        <Dropdown cities={this.state.cities} activeSelection={this.state.activeSelection} setActive={this.setActiveSelection} />
        {this.state.citiesInfo.map(item => (
          <Citie key={item.id} data={item.citiesData}/>
        ))}
      </div>
    );
  }
}

export default App;
