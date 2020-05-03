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
      date: "hoje",
      isLiked: false,
    }

    this.tweets.unshift(newTweet);
    idCount +1;
  }


  sizeAlert() {
    let span = document.getElementById("targetSpan");
    if (this.tweetText.length > 0 && this.tweetText.length <= 80) {
      span.classList.remove("largeTweet");
      span.classList.remove("mediumTweet");
      span.classList.add("shortTweet");
    } 
    if (this.tweetText.length > 80 && this.tweetText.length <= 120) {
      span.classList.remove("shortTweet");
      span.classList.remove("largeTweet");
      span.classList.add("mediumTweet");
    }
    if(this.tweetText.length > 120 && this.tweetText.length <= 140) {
      span.classList.remove("shortTweet");
      span.classList.remove("mediumTweet");
      span.classList.add("largeTweet");
      
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
