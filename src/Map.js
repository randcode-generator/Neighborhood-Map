import React, { Component } from 'react';
import scriptLoader from 'react-async-script-loader'

class Map extends Component {
  constructor(props) {
    super(props);
    this.mapLoaded = false
    this.markers = []
  }

  infoWindowHTML(data) {
    return `<h2><a href="${data.url}" target="_blank">${data.name}</a></h2>` +
      `${data.address1}<br>` +
      `${data.address2}<br>` +
      `${data.display_phone}<br>`      
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    var map = this.map
    var markers = this.markers

    var infowindow = new window.google.maps.InfoWindow();

    let itemClicked = this.props.itemClicked
    if(itemClicked != null && itemClicked !== prevProps.itemClicked) {
      markers.forEach(function(item, i) {
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
      var options = {
        zoom: 14,
        center: {
          lat: 40.594069, 
          lng: -73.976514
        }
      }

      let infoWindowHTML = this.infoWindowHTML
      map = this.map = new window.google.maps.Map(document.getElementById('Gmap'), options);
      this.props.items.forEach(function(item, i) {
        var m = new window.google.maps.Marker({
          map: map,
          position: {lat: item.coordinates.latitude, lng: item.coordinates.longitude}
        })
        let clickFunc = function() {
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
        m.addListener('click', clickFunc)
        markers.push({'id': item.id, 'marker':m, 'clickFunc': clickFunc})
      })
    } else {
      markers.forEach(function(item, i) {
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