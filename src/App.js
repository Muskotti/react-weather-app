import React from 'react';
import './App.scss';
import Header from "./HeaderApp.js";
import Citie from "./CitieInfo.js";
import Dropdown from "./DropdownMenu.js"

class App extends React.Component {

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
