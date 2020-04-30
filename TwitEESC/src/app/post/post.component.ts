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
    function array_move(array, old_index, new_index) {
      if (new_index >= array.length) {
        let k = new_index - array.length + 1;
        while (k--) {
          array.push(undefined);
        }
      }
      array.splice(new_index, 0, array.splice(old_index, 1)[0]);
      
    }
    let selectedPost = this.tweets.find(item => item.id === id);
    array_move(this.tweets, id, 0);

    selectedPost.isLiked = !selectedPost.isLiked;

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
