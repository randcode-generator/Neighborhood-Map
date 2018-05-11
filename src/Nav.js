import React, { Component } from 'react';
import './Nav.css'
import yelpImg from './img/Yelp.png'

class Nav extends Component {
  filterChange(e) {
    this.props.filterChange(e.target.value)
  }

  businessClicked(e) {
    this.props.businessClicked(e.target.id)
  }

  businessKeyDown(e) {
    var type = e.type;
    if (type === 'keydown') {
      if (e.keyCode === 13 || e.keyCode === 32) {
        this.businessClicked(e)
        e.preventDefault();
      }
    }
  }

	render() {
    return(
      <nav id="drawer">
        <div style={{'marginLeft':'20px', 'marginRight':'20px'}}>
          <h2>Neighborhood Map</h2>
          <label htmlFor="filterText" className="visuallyhidden">Filter</label>
          <input type="text" name="filterText" tabIndex="0" id="filterText" placeholder="Filter..." onChange={this.filterChange.bind(this)}/>
          <div className="stores" style={{'minHeight':'200px', 'backgroundColor': 'white'}}>
            <ul>
              {
                this.props.items.map((item, i) => {
                  return (
                    <li key={i}><span tabIndex="0" role="button" id={item.id} onClick={this.businessClicked.bind(this)} onKeyDown={this.businessKeyDown.bind(this)}>{item.name}</span></li>
                  )
                }, this)
              }
            </ul>
          </div>
          <div id="yelpLogo">
            <span style={{ 'margin':'10px', 'fontSize': '22px' }}>Powered by:</span>
            <img src={ yelpImg } alt="Yelp"/>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;