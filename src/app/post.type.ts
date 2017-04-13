import { IUser } from './user.type';

export interface IPost {
  id: Number;
  title: String;
  body: String;
  likeCount: Number;
  date: Date;
  userId: String;
  author: IUser;
}

export interface IQueryResponse {
  posts: IPost[];
  loading: any;
}

