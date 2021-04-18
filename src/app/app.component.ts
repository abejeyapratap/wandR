import { Component } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FireauthService } from './fireauth.service';

// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private fireAuthService: FireauthService) {}

  ngOnInit() {
    /* firebase.default.initializeApp(environment.firebaseConfig);
    this.debugShit(); */
    this.fireAuthService.appInitialize();
  }
}
