import React from 'react';
import './App.scss';

class DropDown extends React.Component {

  constructor() {
    super();
    this.state = {
      showMenu: false,
      activeSelection: "Kaikki kaupungit",
      cities: ['Tampere', 'Jyväskylä', 'Kuopio', 'Helsinki', 'Kaikki kaupungit']
    }
  }

  render() {
    const cities = ['Tampere', 'Jyväskylä', 'Kuopio', 'Helsinki', 'Kaikki kaupungit']
    const list = cities.map((name, i) => { return (<p key={i} onClick={()=> this.setState({activeSelection: name, showMenu: false})}>{name}</p>) })

    return (
      <div className="card" style={{ textAlign: "left", fontSize: 13, cursor: 'pointer' }} >
        <div className="container">
          <div className="menu" onClick={() => this.setState(prevState => ({ showMenu: !prevState.showMenu }))}>
            <p style={{fontWeight: "bold"}}>{this.state.activeSelection}</p>
            <div className={this.state.showMenu ? "arrow-up" : "arrow-down"} />
          </div>
          {this.state.showMenu ? (
            <div>
              {list}
            </div>
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
