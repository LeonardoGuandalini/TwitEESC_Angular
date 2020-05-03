import { Component, OnInit, Input } from '@angular/core';
import { TWEETS } from 'src/app/tweets/mock-tweet';
import { tweet } from 'src/app/tweets/tweet';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  tweets = TWEETS;

  

  likePost(id) {
    let selectedPost = this.tweets.find(item => item.id === id);
    let container = document.getElementById(id);
    if (selectedPost.isLiked == true) {
      container.classList.remove("isLiked");
      selectedPost.isLiked = !selectedPost.isLiked;
    } else {
      container.classList.add("isLiked");
      selectedPost.isLiked = !selectedPost.isLiked;

    }

  }

  deletePost(id) {
    
    let selectedPost = this.tweets.find(item => item.id === id);
    let removeIndex = this.tweets.map(function(item) { return item.id; }).indexOf(id);
    this.tweets.splice(removeIndex, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
