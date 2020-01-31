import React from 'react';
import './App.css';

class DropDown extends React.Component {

  constructor() {
    super();
    this.state = {
      showMenu: false,
      activeSelection: "Kaikki kaupungit"
    }
  }

  render() {
    return (
      <div className="card" style={{ textAlign: "left", fontSize: 13, cursor: 'pointer'}} >
        <div className="container">
          <div className="button" onClick={() => this.setState(prevState => ({ showMenu: !prevState.showMenu }))}>
            {this.state.activeSelection}
          </div>
          {this.state.showMenu ? (
            <ul>
              <li><div>Tampere</div></li>
              <li><div>Jyväskylä</div></li>
              <li><div>Kuopio</div></li>
              <li><div>Helsinki</div></li>
              <li><div>Kaikki kaupungit</div></li>
            </ul>
          ) :
            (
              null
            )
          }
        </div>
      </div>
    );
  }
}

export default DropDown;
