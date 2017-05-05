import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  constructor(public navCtrl: NavController) {

  }
  ngOnInit(): void {
    this.drawMap();
  }
   drawMap(): void {
    var BING_KEY = 'AuhiCJHlGzhg93IqUH_oCpl_-ZUrIE6SPftlyGYUvr9Amx5nzA-WqGcPquyFZl4L'
    let map = Leaflet.map('map');
    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzsdDXD2lMJpTfCVsVuA', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(map);
    var baseLocation;
    var pointedLocation;

    //web location
    map.locate({ setView: true});
    Leaflet.tileLayer.bing(BING_KEY).addTo(map)
    //when we have a location draw a marker and accuracy circle
    function onLocationFound(e) {
      baseLocation = e.latlng;
      var radius = e.accuracy / 2;

      Leaflet.marker(e.latlng).addTo(map);

      Leaflet.circle(e.latlng, radius).addTo(map);
    }
    map.on('locationfound', onLocationFound);
    //alert on location error
    function onLocationError  (e) {
      alert(e.message);
    }
    function getLoc(e){
      pointedLocation = e.latlng;
      var distance = pointedLocation.distanceTo(baseLocation).toFixed(2);
      Leaflet.marker(e.latlng).addTo(map).bindPopup("You marked " + distance + " meters from your location \n "+e.latlng).openPopup();

    }
    map.on('locationerror', onLocationError);
    map.on('click', getLoc);
  }
}
