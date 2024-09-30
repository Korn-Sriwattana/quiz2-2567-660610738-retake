// You can define interfaces for all React components here.
// Do not forget to export properly.
interface PostComponent {
  content: string;
  profilePic: string;
  PostTitle: string;
  likes: number;
}
export type { PostComponent };

interface CommentComponent {
  ImagePath: string;
  username: string;
  commentTitle: string;
  likes: number;
  replies: ReplyProps[];
}
export type { CommentComponent };

interface ReplyProps {
  ImagePath: string;
  username: string;
  replyTitle: string;
  likes: number;
}
export type { ReplyProps };
