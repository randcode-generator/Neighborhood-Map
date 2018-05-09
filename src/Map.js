import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader'

class Map extends Component {
  constructor(props) {
    super(props);
    this.mapLoaded = false
    this.markers = []
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    var map = this.map
    var markers = this.markers

    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if(isScriptLoaded && isScriptLoadSucceed && this.mapLoaded === false) {
      this.mapLoaded = true
      var options = {
        zoom: 14,
        center: {
          lat: 40.594069, 
          lng: -73.976514
        }
      }

      map = this.map = new window.google.maps.Map(document.getElementById('Gmap'), options);
      this.props.items.forEach(function(item, i) {
        var m = new window.google.maps.Marker({
          map: map,
          position: {lat: item.coordinates.latitude, lng: item.coordinates.longitude}
        })
        markers.push({'id': item.id, 'marker':m})
      })
    } else {
      markers.forEach(function(item, i) {
        //item.marker.setMap(null)
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
      <main id="Gmap"></main>
    )
  }
}

export default scriptLoader(
    ["https://maps.googleapis.com/maps/api/js?key=AIzaSyAQns-wTZqJBBobZmGK-_8IV69_GIqxyW4"]
)(Map)