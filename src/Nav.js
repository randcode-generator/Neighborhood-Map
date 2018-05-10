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
        <input type="text" id="filterText" placeholder="Filter..." onChange={this.changed.bind(this)}/>
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
        <div id="yelpLogo">
          <span style={{ 'margin':'10px', 'fontSize': '22px' }}>Powered by:</span>
          <img src={yelpImg} alt="Yelp"/>
        </div>
      </nav>
    )
  }
}

export default Nav;