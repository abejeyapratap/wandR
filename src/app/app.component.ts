import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { Coordinates } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(/*private geolocation: Geolocation*/) {}
  private geolocation = new Geolocation();

  //private positions: Coordinates[] = [];
  private positions: TestPosition[] = [];

  ngOnInit() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        console.log(resp.coords);
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      //this.positions.push((data as Geoposition).coords);
    });

    this.debugPositionsFunctions();
  }

  debugPositionsFunctions() {
    this.positions.push(new TestPosition(0, 0));
    this.positions.push(new TestPosition(0, 1));
    console.log(`Max Dist: ${this.calculateMaxDist()}`);
    console.log(`Total Dist: ${this.calculateTotalDist()}`);
  }

  calculateMaxDist(): Number {
    if (this.positions.length < 2) {
      return -1;
    }
    let dist = 0;
    for (let i = 1; i < this.positions.length; i++) {
      let c = this.positions[i];
      let xdist = c.latitude - this.positions[0].latitude;
      let ydist = c.longitude - this.positions[0].longitude;
      let tdist = Math.sqrt(Math.pow(xdist, 2) + Math.pow(ydist, 2));
      if (tdist > dist) {
        dist = Math.sqrt(Math.pow(xdist, 2) + Math.pow(ydist, 2));
      }
    }
    return dist;
  }

  calculateTotalDist(): Number {
    if (this.positions.length < 2) {
      return -1;
    }
    let dist = 0;
    for (let i = 1; i < this.positions.length; i++) {
      let c1 = this.positions[i - 1];
      let c2 = this.positions[i];
      let xdist = c2.latitude - c1.latitude;
      let ydist = c2.longitude - c1.longitude;
      let tdist = Math.sqrt(Math.pow(xdist, 2) + Math.pow(ydist, 2));
      dist += tdist;
    }
    return dist;
  }
}

export class TestPosition {
  constructor(public latitude: number, public longitude: number) {}
}
