import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverPage } from './discover.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage,
    children: [
      {
        path: 'today',
        loadChildren: () =>
          import('./today/today.module').then((m) => m.TodayPageModule),
      },
      {
        path: 'feed',
        loadChildren: () =>
          import('./feed/feed.module').then((m) => m.FeedPageModule),
      },
      {
        path: 'journal',
        loadChildren: () =>
          import('./journal/journal.module').then((m) => m.JournalPageModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./account/account.module').then((m) => m.AccountPageModule),
      },
      {
        path: '',
        redirectTo: '/welcome/discover/today',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/welcome/discover/today',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
