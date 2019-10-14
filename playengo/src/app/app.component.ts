import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { Post } from './class/Post';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'playengo';
  allPosts: Post[];
  post: Post;
  image: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    let allPosts = this.apiService.getAllPosts()
    .subscribe((result: any) => {
      this.allPosts = result.response.posts;
      this.post = this.allPosts[0];
 
      console.log(this.allPosts)
      console.log(this.post)
    });
  }
}
