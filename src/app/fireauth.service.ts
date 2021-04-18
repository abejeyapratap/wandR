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
    //this.loginAccount('test', 'test');
    this.getFeed('example');
  }

  loginAccount(email: string, password: string) {
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

  createAccount(email: string, password: string) {
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

  getUserData(uid: string, data: string): string {
    let t = '';
    firebase.default
      .database()
      .ref(`userdata/${uid}/${data}`)
      .on('value', (snapshot) => {
        console.log(snapshot.val());
        t = snapshot.val();
      });
    return t;
  }

  getFeed(uid: string): Post[] {
    var posts: Post[] = [];
    var friends;
    firebase.default
      .database()
      .ref(`userdata`)
      .on('value', (snapshot) => {
        friends = snapshot.child(`${uid}/friends`).val();
        console.log(friends);
        for (var f in friends) {
          var n = snapshot.child(`${friends[f]}/username`).val();
          var pp = snapshot.child(`${friends[f]}/profile`).val();
          var j = snapshot.child(`${friends[f]}/journal`).val()[0];
          let p = new Post(n, j, pp);
          posts.push(p);
        }
        console.log(posts);
      });
    return posts;
  }
}

export class Post {
  constructor(
    public name: string,
    public body: string,
    public profile: string
  ) {}
}
