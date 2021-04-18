import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Coordinates } from './welcome/location.model';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private geolocation = new Geolocation();
  private positions: Coordinates[] = [];

  constructor(private alertCtrl: AlertController) {}

  locateUser() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        console.log(resp.coords);
      })
      .catch((error) => {
        // console.log('Error getting location', error);
        this.showErrorAlert();
      });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      //this.positions.push((data as Geoposition).coords);
    });

    this.debugPositionsFunctions();
    /* if (!Capacitor.isPluginAvailable('Geolocation')) {
      this.showErrorAlert();
      return;
    }

    Plugins.Geolocation.getCurrentPosition()
      .then((geoPosition) => {
        const coordinates: Coordinates = {
          lat: geoPosition.coords.latitude,
          lng: geoPosition.coords.longitude,
        };
      })
      .catch((err) => {
        this.showErrorAlert();
      }); */
  }

  private debugPositionsFunctions() {
    this.positions.push(new Coordinates(0, 0));
    this.positions.push(new Coordinates(0, 1));
    this.positions.push(new Coordinates(2, 2));
    console.log(`Max Dist: ${this.calculateMaxDist()}`);
    console.log(`Total Dist: ${this.calculateTotalDist()}`);
  }

  calculateDistLatLong(lat1, lat2, lon1, lon2): number {
    const R = 6371e3; // metres
    const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    return d;
  }

  calculateMaxDist(): number {
    if (this.positions.length < 2) {
      return -1;
    }
    let dist = 0;
    let start = this.positions[0];
    for (let i = 1; i < this.positions.length; i++) {
      let c = this.positions[i];
      let tdist = this.calculateDistLatLong(
        c.latitude,
        start.latitude,
        c.longitude,
        start.longitude
      );
      if (tdist > dist) {
        dist = tdist;
      }
    }
    return dist;
  }

  calculateTotalDist(): number {
    if (this.positions.length < 2) {
      return -1;
    }
    let dist = 0;
    for (let i = 1; i < this.positions.length; i++) {
      let c1 = this.positions[i - 1];
      let c2 = this.positions[i];
      let xdist = c2.latitude - c1.latitude;
      let ydist = c2.longitude - c1.longitude;
      let tdist = this.calculateDistLatLong(
        c1.latitude,
        c2.latitude,
        c1.longitude,
        c2.longitude
      );
      dist += tdist;
    }
    return dist;
  }

  private showErrorAlert() {
    this.alertCtrl
      .create({
        header: 'Could not fetch location',
        message: 'Please try again later',
        buttons: ['Okay'],
      })
      .then((alertEl) => alertEl.present());
  }
}
