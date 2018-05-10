import React, { Component } from 'react';
import './Nav.css'
import yelpImg from './img/Yelp.png'

class Nav extends Component {
  changed(e) {
    this.props.filterChange(e.target.value)
  }

  clicked(e) {
    this.props.onClicked(e.target.id)
  }

	render() {
    return(
      <nav id="drawer">
        <h2>Neighborhood Map</h2>
        <input type="text" onChange={this.changed.bind(this)}/>
        <div className="stores">
          <ul>
            {
              this.props.items.map(function(item, i) {
                return (
                  <li key={i}><span id={item.id} onClick={this.clicked.bind(this)}>{item.name}</span></li>
                )
              }, this)
            }
          </ul>
        </div>
        <div>
          <img src={yelpImg} />
        </div>
      </nav>
    )
  }
}

export default Nav;