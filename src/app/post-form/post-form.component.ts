import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() Submitted = new EventEmitter<Post>();
  constructor() { }

  ngOnInit(): void {
  }

  // submitPost():void{
  //   this.Submitted.emit();
  // }

//combine both submitPost and add Posts 

  addPosts(form:NgForm):void{
    let newPost:Post = {
      title: form.form.value.title,
      thought:form.form.value.thought
    }
    this.Submitted.emit(newPost);

  }

}
