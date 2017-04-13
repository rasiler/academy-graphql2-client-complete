import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import { IQueryResponse } from './post.type';
import gql from 'graphql-tag';


const postsQuery = gql`
    query Posts {
       posts {
            id,
            title,
            body,
            likeCount,
            date,
            userId,
            author {
              id,
              name,
              username,
              email
            }
       } 
    }`;

@Injectable()
export class ServerService {

  constructor(private http: Http, private apollo: Apollo) { }

  get(url) {
    return this.http.get(url)
    .map(res => res.json());
  }

  getGraphQl() {
      return this.apollo.watchQuery<IQueryResponse>({ query: postsQuery });
  }
}
