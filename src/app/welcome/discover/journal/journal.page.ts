// BRUTALLY HARD CODED!!!!
import { Component, OnInit } from '@angular/core';
import { JournalList } from './journal.model';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {
  journalList: JournalList[] = [
    {
      date: '4/7',
      activity: 'You went biking!',
      description: 'Total: 9 miles, Max: 4 miles',
    },
    {
      date: '4/8',
      activity: 'You went to the park!',
      description: 'Total: 5 miles, Max: 9.4 miles',
    },
    {
      date: '4/9',
      activity: 'You played football!',
      description: 'Total: 9 miles, Max: 4 miles',
    },
    {
      date: '4/10',
      activity: 'You went to the park!',
      description: 'Total: 5 miles, Max: 9.4 miles',
    },
    {
      date: '4/11',
      activity: 'You went biking!',
      description: 'Total: 9 miles, Max: 4 miles',
    },
    {
      date: '4/12',
      activity: 'You played football!',
      description: 'Total: 9 miles, Max: 4 miles',
    },
    {
      date: '4/13',
      activity: 'You went biking!',
      description: 'Total: 9 miles, Max: 4 miles',
    },
    {
      date: '4/14',
      activity: 'You went to the park!',
      description: 'Total: 5 miles, Max: 9.4 miles',
    },
    {
      date: '4/15',
      activity: 'You went biking!',
      description: 'Total: 9 miles, Max: 4 miles',
    },
    {
      date: '4/16',
      activity: 'You went to the park!',
      description: 'Total: 5 miles, Max: 9.4 miles',
    },
    {
      date: '4/17',
      activity: 'You played football!',
      description: 'Total: 9 miles, Max: 4 miles',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
