import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GoogleMap, GoogleMaps, LatLng, CameraPosition,GoogleMapsEvent, MarkerOptions, Marker } from '@ionic-native/google-maps';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public googleMaps: GoogleMaps ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  ngAfterViewInit() {
    this.loadMap();
  }
 
  loadMap() {
    let element = document.getElementById('map');
    let map: GoogleMap = this.googleMaps.create(element, {});
    let latlng = new LatLng(7.17228, 100.61408);

    map.one(GoogleMapsEvent.MAP_READY).then(() => {
        let position: CameraPosition = {
      target: latlng,
      zoom: 10,
      tilt: 30
        }
        map.moveCamera(position);  
      let markeroptions: MarkerOptions = {
      position: latlng,
      title: 'My Marker'
    };
 
    let marker = map.addMarker(markeroptions).then((marker: Marker) => {
      marker.showInfoWindow();
    })
    })
  }
    }


