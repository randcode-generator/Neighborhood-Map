import React, { Component } from 'react';
import Map from './Map.js'
import Nav from './Nav.js'
import { YELP_KEY, DEFAULT_GPS_LOCATION } from './Config.js'

class App extends Component {
  fetchBusinesses() {
    let options = {
      headers: {
        'Authorization': `Bearer ${YELP_KEY}` 
      }
    }

    var processJson = (result) => {
      if(result.error === undefined) {
        this.setState({
          itemClicked: null,
          allBusinesses: result.businesses,
          businesses: result.businesses
        })
      } else {
        errorFunc('yelp', JSON.stringify(result.error))
      }
    }

    var errorFunc = (app, error) => {
      this.setState({errors:`${app} => ${error}`})
    }

    var url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=delis&latitude=${DEFAULT_GPS_LOCATION.lat}&longitude=${DEFAULT_GPS_LOCATION.lng}&limit=8`

    fetch(url, options)
      .then(res => res.json())
      .then(data => processJson(data))
      .catch(error => errorFunc('fetch', error))
  }

  componentDidMount() {
    this.fetchBusinesses()
  }

  filterChange(e) {
    const { allBusinesses } = this.state
    var updated = allBusinesses
    if(e.length > 0) {
      updated = allBusinesses.filter((item) => {
        return item.name.toLowerCase().search(
          e.toLowerCase()) !== -1;
      })
    }

    this.setState({
      businesses: updated
    })
  }

  clicked(id) {
    this.setState({
      itemClicked: id
    })
  }

  render() {
    if(this.state == null) {
      return (<h2>Loading...</h2>)
    } else if(this.state.errors != null) {
      return (<h2>{this.state.errors}</h2>)
    } else {
      const { businesses, itemClicked } = this.state
      return (
        <div id="divUp">
          <Nav items={ businesses } 
            filterChange={ this.filterChange.bind(this) }
            onClicked={ this.clicked.bind(this) }>
          </Nav>
          <Map items={ businesses }
            itemClicked={ itemClicked }></Map>
        </div>);
    }
  }
}

export default App;
