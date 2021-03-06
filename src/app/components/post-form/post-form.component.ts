import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from '../../services/post.service'

import { Post } from '../../models/Post';
import { isContextDirty } from '@angular/core/src/render3/styling';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit, OnChanges {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log("post-form ngOnChanges: ", changes);
  }

  addPost(title, body) {
    if (!title || !body) {
      alert('Please add post');
    } else {
      this.postService.savePost({ title, body } as Post).subscribe(post => {
        this.newPost.emit(post);
      });
    }
  }

  updatePost(title, body, id) {
    if (!title || !body) {
      alert('Please add post');
    } else {
      this.postService.updatePost({ title, body, id } as Post)
        .subscribe(post => {
          console.log("update post to: ", post);
          this.isEdit = false;
          this.updatedPost.emit(post);
        });
    }
  }
}
