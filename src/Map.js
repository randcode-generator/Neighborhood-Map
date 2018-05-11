import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader'
import { MAP_KEY, DEFAULT_GPS_LOCATION } from './Config.js'

class Map extends Component {
  constructor(props) {
    super(props);
    this.mapLoaded = false
    this.markers = []
  }

  infoWindowHTML(data) {
    return `<h2>${data.name}</h2>` +
      `${data.address1}<br>` +
      `${data.address2}<br>` +
      `${data.display_phone}<br><br>` +
      `<a href="${data.url}" target="_blank">Read more on Yelp</a>`     
  }

  menuItemClicked(e) {
    let drawer = document.querySelector('#drawer')
    let cList = drawer.classList
    cList.toggle('open')
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    var map = this.map
    var markers = this.markers

    var infowindow = new window.google.maps.InfoWindow();

    if(this.props.items === undefined) {
      return
    }

    let itemClicked = this.props.itemClicked
    if(itemClicked != null && itemClicked !== prevProps.itemClicked) {
      markers.forEach((item, i) => {
        if(item.id === itemClicked) {
          item.marker.setAnimation(window.google.maps.Animation.BOUNCE)
          item.clickFunc()
          window.setTimeout(() => item.marker.setAnimation(null), 1300)
        }
      })
    }

    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if(isScriptLoaded && isScriptLoadSucceed && this.mapLoaded === false) {
      this.mapLoaded = true
      let options = {
        zoom: 14,
        center: {
          lat: DEFAULT_GPS_LOCATION.lat, 
          lng: DEFAULT_GPS_LOCATION.lng
        }
      }

      let infoWindowHTML = this.infoWindowHTML
      map = this.map = new window.google.maps.Map(document.getElementById('Gmap'), options);
      this.props.items.forEach((item, i) => {
        var m = new window.google.maps.Marker({
          map: map,
          position: {
            lat: item.coordinates.latitude,
            lng: item.coordinates.longitude
          }
        })
        let markerClickedFunc = () => {
          let data = {
            name: item.name,
            url: item.url,
            address1: item.location.display_address[0],
            address2: item.location.display_address[1],
            display_phone: item.display_phone
          }
          infowindow.setContent(infoWindowHTML(data))
          infowindow.open(map, m);
        }
        m.addListener('click', markerClickedFunc)
        markers.push({'id': item.id, 'marker':m, 'clickFunc': markerClickedFunc})
      })
    } else {
      markers.forEach((item, i) => {
        var found = this.props.items.find((x) => { return x.id === item.id })
        if(found === undefined) {
          item.marker.setVisible(false)
        } else {
          item.marker.setVisible(true)
        }
      }, this)
    }
  }

	render() {
    return(
      <main>
        <div id="Gmap"></div>
        <a id="menu" style={{'position':'absolute', 'top':'40px', 'right':'0px', 'backgroundColor':'white'}} onClick={this.menuItemClicked.bind(this)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
          </svg>
        </a>
      </main>
    )
  }
}

export default scriptLoader(
    [`https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}`]
)(Map)