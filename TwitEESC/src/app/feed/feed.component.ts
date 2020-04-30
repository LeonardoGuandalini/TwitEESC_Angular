import { Component, OnInit } from '@angular/core';

import { TWEETS } from 'src/app/tweets/mock-tweet';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  date = new Date();
  dateDay = this.date.getDate();
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  dateMonth = this.date.getMonth();
  dateHour = this.date.getHours();
  dateMin = this.date.getMinutes();

  timePosted: string = this.months[this.dateMonth] + " " + this.dateDay + " | " + this.dateHour + ":" + this.dateMin;

  tweets = TWEETS;

  
  constructor() { }

  ngOnInit(): void {
  }

}
