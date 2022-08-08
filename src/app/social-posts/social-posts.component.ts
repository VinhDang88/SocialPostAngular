import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Posts:Post[]=[
    {
      title:"Food Lover",
      thought:"Sushi is the best thing in the world."
    },
    {
      title:"Hopeless Lover",
      thought:"I've been divorced 3 times."
    }
  ]
  onSubmit(post:Post):void{
     //Take in a post parameter push in-to post

      this.Posts.unshift(post)
  }

}

