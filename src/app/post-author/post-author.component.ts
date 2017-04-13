import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../user.type';

@Component({
  selector: 'app-author',
  templateUrl: './post-author.component.html',
  styleUrls: ['./post-author.component.css']
})
export class PostAuthorComponent implements OnInit {

  @Input() user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
