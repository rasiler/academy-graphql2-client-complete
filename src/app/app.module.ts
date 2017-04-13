import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { LikeComponent } from './like/like.component';
import { PostTitleComponent } from './post-title/post-title.component';
import { PostDateComponent } from './post-date/post-date.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsService } from './posts.service';
import { UserService } from './user.service';
import { ServerService } from './server.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { PostContainerComponent } from './post-container/post-container.component';
import  { RouterModule } from '@angular/router';
import { routes } from './routes';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostAuthorComponent } from './post-author/post-author.component';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { GraphqlService } from './graphql.service';

const routing = RouterModule.forRoot(routes);

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8888/graphql'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LikeComponent,
    PostTitleComponent,
    PostDateComponent,
    PostsListComponent,
    SearchbarComponent,
    HomeContainerComponent,
    PostContainerComponent,
    NavBarComponent,
    PostAuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ApolloModule.forRoot(provideClient)
  ],
  providers: [PostsService, ServerService, UserService, GraphqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
