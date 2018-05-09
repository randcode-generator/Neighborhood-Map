import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader'

class Map extends Component {
  componentDidUpdate (prevProps, prevState, snapshot) {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if(isScriptLoaded && isScriptLoadSucceed) {
      var options = {
        zoom: 14,
        center: {
          lat: 40.594069, 
          lng: -73.976514
        }
      }

      var map = new window.google.maps.Map(document.getElementById('Gmap'), options);

      this.props.items.map(function(item, i) {
        new window.google.maps.Marker({
          map: map,
          animation: window.google.maps.Animation.DROP,
          position: {lat: item.coordinates.latitude, lng: item.coordinates.longitude}
        })
      })
      // var marker = new window.google.maps.Marker({
      //   map: map,
      //   animation: window.google.maps.Animation.DROP,
      //   position: {lat: 40.599282, lng: -73.975999}
      // });
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