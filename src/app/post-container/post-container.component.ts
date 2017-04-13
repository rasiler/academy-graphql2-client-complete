import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../post.type';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  postId: number;
  subscription;
  post: IPost;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.post = this.postsService.getPost(this.postId);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
