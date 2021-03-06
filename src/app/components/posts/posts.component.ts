import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PostService } from '../../services/post.service'

import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnChanges {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("posts ngOnChanges: ", changes);
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) {
        this.posts.splice(index, 1); //remove o post antigo que foi updated
        this.posts.unshift(post); //Insere o post updated no inicio do array
        this.isEdit = false;
      }
      this.currentPost = {
        id: 0,
        title: '',
        body: ''
      }
    });
  }

  removePost(post: Post) {
    if (confirm('Are you sure?')) {
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach((cur, index) => {
          if (post.id === cur.id) {
            this.posts.splice(index, 1); //remove o post antigo que foi updated
          }
        });
      });
    }
  }

}
