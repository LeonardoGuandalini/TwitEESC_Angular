import { Component, OnInit, Input } from '@angular/core';
import { TWEETS } from 'src/app/tweets/mock-tweet';
import { tweet } from 'src/app/tweets/tweet';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent implements OnInit {

  @Input() tweetText: string = "";
  
  tweets=TWEETS;

  
  addPost() {
    let idCount = 4;
    const newTweet: tweet = {
      id: idCount,
      author: "Leonardo",
      textcont: this.tweetText,
      date: "today",
      isLiked: false,
    } 
    this.tweets.unshift(newTweet);
    idCount +1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
