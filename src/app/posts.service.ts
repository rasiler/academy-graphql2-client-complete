import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { IPost } from './post.type';
import { Observable } from 'rxjs';


const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class PostsService {

posts: IPost[];

constructor(private serverService: ServerService) {}

 getFilteredPosts(query) {
   if (!query) { return this.posts; }
   const lowerCaseQuery = query.toLowerCase();
   return this.posts.filter((post) => {
     return post.title.toLowerCase().includes(query);
   });
 }


getPosts() {
     this.serverService.get(`${BASE_URL}/posts`)
      .map(posts => {
          return this.normalizePosts(posts);
        })
      .subscribe((posts: IPost[]) => {
         this.posts = posts;
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

updateLikeCount(id, likeCount) {
    const index = this.posts.findIndex((post) => post.id === id);
    this.posts[index].likeCount = likeCount;
}

getPost(id: number) {
    return this.posts.find(post => post.id === id);
}
}
