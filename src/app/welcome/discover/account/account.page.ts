import { Component, OnInit } from '@angular/core';
import { FireauthService } from 'src/app/fireauth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  constructor(private fireAuthService: FireauthService) {}

  private bio: string = null;
  private searching = false;

  ngOnInit() {}

  fetchBio(id: string) {
    if (this.bio == null) {
      if (!this.searching) {
        this.bio = this.fireAuthService.getUserBio(id);
        /*this.fireAuthService.getUserBio(id).then((b) => {
          this.bio = b;
        }); */
      }
      return '';
    }
    return this.bio; //await this.fireAuthService.getUserBio(id);
  }
}
