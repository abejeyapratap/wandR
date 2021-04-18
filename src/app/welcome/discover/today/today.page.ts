import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LocationService } from 'src/app/location.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit {
  // private _maxDistance?: number;

  constructor(
    private locationService: LocationService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.locationService.locateUser();
  }

  getMaxDistance() {
    return this.locationService.calculateMaxDist();
  }

  getTotalDistance() {
    return this.locationService.calculateTotalDist();
  }

  // Create an Alert with About info
  onAboutTotal() {
    this.alertCtrl
      .create({
        header: 'About Total Distance',
        message:
          '"Total Distance" refers to your total distance travelled today.',
        buttons: [
          {
            text: 'Okay',
          },
        ],
      })
      .then((alertEl) => alertEl.present());
  }

  onAboutMax() {
    this.alertCtrl
      .create({
        header: 'About Max Distance',
        message:
          '"Max Distance" refers to how far you got away from your first recorded location today.',
        buttons: [
          {
            text: 'Okay',
          },
        ],
      })
      .then((alertEl) => alertEl.present());
  }
}
