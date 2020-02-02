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
        { id: '634964', name: 'Tampere', show: true, citiesData: [] },
        { id: '655195', name: 'Jyväskylä', show: true, citiesData: [] },
        { id: '650225', name: 'Kuopio', show: true, citiesData: [] },
        { id: '658225', name: 'Helsinki', show: true, citiesData: [] }
      ],
    }
  }

  componentDidMount() {
    let save = localStorage.getItem('citiesInfo');
    if (save) {
      let json = JSON.parse(save)
      let compareTime = new Date()
      let storageTime = new Date(json[0])
      console.log(storageTime)
      console.log(compareTime)
      if (storageTime.getTime() < compareTime.getTime()) {
        this.getDataRest()
      } else {
        this.setDataLocal(json)
      }
    } else {
      this.getDataRest()
    }
  }

  setDataLocal = (json) => {
    json = json.slice(1)
    this.setState({ citiesInfo: json[0], loading: false }, () => console.log(this.state))
  }

  getDataRest = async () => {
    let i = 0;
    for (i; i < this.state.citiesInfo.length; i++) {
      const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + this.state.citiesInfo[i].id + '&units=metric&cnt=6&APPID=' + text)
      const json = await response.json()
      let citie = this.state.citiesInfo
      citie[i].citiesData = json
      this.setState({ citiesInfo: citie })
    }
    this.setState({ loading: false })
    let save = []
    let date = new Date()
    date.setHours(date.getHours() + 3)
    save.push(date)
    save.push(this.state.citiesInfo)
    localStorage.setItem('citiesInfo', JSON.stringify(save))
  }

  setActiveSelection = (name) => {
    this.setState({ activeSelection: name })
    if (name === 'Kaikki kaupungit') {
      this.state.citiesInfo.forEach(item => item.show = true)
    } else {
      this.state.citiesInfo.forEach(item => {
        if (item.name !== name) {
          item.show = false
        } else {
          item.show = true
        }
      })
    }
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
          {this.state.citiesInfo.map(item => {
            if (item.show) {
              return (
                <Citie key={item.id} data={item.citiesData} name={item.name} />
              )
            }
            return null
          })}
        </div>
      </div>
    );
  }
}

export default App;
