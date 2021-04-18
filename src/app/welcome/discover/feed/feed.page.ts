import { Component, OnInit } from '@angular/core';
import { FireauthService } from 'src/app/fireauth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  constructor(private fireAuthService: FireauthService) {}

  private finalPosts = null;

  ngOnInit() {}

  generatePosts() {
    if (this.finalPosts != null && this.finalPosts.length > 0)
      return this.finalPosts; //document.write(this.finalPosts);
    let postlist = this.fireAuthService.getFeed('example');
    this.finalPosts = postlist;
    return postlist;
    /* let final = '';
    for (let i = 0; i < postlist.length; i++) {
      let pp = postlist[i].profile;
      let uname = postlist[i].name;
      let body = postlist[i].body;
      final += `<ion-item> < ion - avatar slot = \"start\" > <img src="${pp}" ></ion-avatar>< ion - label ><h2>${uname} < /h2>  < h3 > ${body} < /h3>    < /ion-label>    </ion-item>`;
    }
    this.finalPosts = final;
    //return final; */
  }
}
