import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { Post } from './class/Post';
import { map } from 'rxjs/operators';
import { User } from './class/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'playengo';
  allPosts: Post[];
  post: Post = <Post> {};
  fullImage: string;
  user: User = <User> {};
  maxPost: number;
  currentIndex: number = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    let allPosts = this.apiService.getAllPosts()
    .subscribe((result: any) => {
      this.allPosts = result.response.posts;
      this.maxPost = result.response.count;
      this.setCurrentPost(0);
    });

    setInterval(() => {
      this.currentIndex += 1;

      if (this.currentIndex > this.maxPost) {
        this.currentIndex = 0;
      }

      this.setCurrentPost(this.currentIndex);
    }, 6000);
  }

  private setCurrentPost(index: number) {
    this.post = this.allPosts[index];

    this.apiService.getImage(this.post.mediaId)
    .subscribe((result: any) => {
      this.fullImage = result.response.media.urls.full;
    });

    this.apiService.getUser(this.post.user.username)
    .subscribe((result: any) => {
      this.user = result.response.user;
    });

  }
}
