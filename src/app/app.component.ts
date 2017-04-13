import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { UserService } from './user.service';
import { GraphqlService } from './graphql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private postsService: PostsService, private userService: UserService, private graphqlService: GraphqlService) {}

  ngOnInit() {
    this.userService.getUsers();
    this.postsService.getPosts();
    this.graphqlService.getPosts();
  }


}
