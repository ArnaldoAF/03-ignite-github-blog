export interface IPostUser {
  login: string;
  avatar_url: string;
  html_url: string;
}
export interface IPost {
  id: number;
  title: string;
  number: number;
  body: string;
  html_url: string;
  created_at: string;
  comments: number;
  user: IPostUser;
}
