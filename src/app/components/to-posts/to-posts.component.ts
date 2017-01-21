import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../interfaces/ipost';

@Component({
  selector: 'to-posts',
  templateUrl: './to-posts.component.html',
  styleUrls: ['./to-posts.component.css'],
  providers: [PostsService]
})
export class ToPostsComponent implements OnInit {
  posts: Array<IPost>

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this._postsService.getPosts()
      .subscribe(data => this.posts = data)
  }

}
