import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
	render() {
    return(
      <nav id="drawer">
        <h2>Neighborhood Map</h2>
        <div className="stores">
          <ul>
            {
              this.props.items.map(function(item, i) {
                return (
                  <li key={i}><a href="#">{item.name}</a></li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav;