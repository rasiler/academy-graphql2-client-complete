import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { IPost, IQueryResponse } from './post.type';
import { Observable } from 'rxjs';
import { ApolloQueryObservable } from 'apollo-angular';



@Injectable()
export class GraphqlService {
  posts: IPost[];

  constructor(private serverService: ServerService) {}


  getPosts() {
     this.serverService.getGraphQl()
      .subscribe(({data}) => {
         this.posts = data.posts;
      });
 }

 


normalizePosts(posts) {
  return posts.map(this.normalizePost);
}

normalizePost(post) {
  return Object.assign({}, post, {
            likeCount: 0,
            date: new Date()
          });
}


  getFilteredPosts(query) {
   if (!query) { return this.posts; }
   const lowerCaseQuery = query.toLowerCase();
   return this.posts.filter((post) => {
     return post.title.toLowerCase().includes(query);
   });
 }
}
