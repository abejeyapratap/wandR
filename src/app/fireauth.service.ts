import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class FireauthService {
  constructor() {}

  appInitialize() {
    firebase.default.initializeApp(environment.firebaseConfig);
    this.debugShit();
  }

  private debugShit() {
    this.loginAccount('test', 'test');
    console.log(this.getUserBio('example'));
  }

  loginAccount(email, password) {
    firebase.default
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  createAccount(email, password) {
    firebase.default
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }

  myUserID(): string {
    return firebase.default.auth().currentUser.uid;
  }

  getUserBio(uid: string): string {
    let t = '';
    firebase.default
      .database()
      .ref(`userdata/${uid}/bio`)
      .on('value', (snapshot) => {
        console.log(snapshot.val());
        t = snapshot.val();
      });
    return t;
  }
}
