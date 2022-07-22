export interface CommentsResult {
data: Comment[];
meta: Meta;
page: number;
}

export interface Meta {
page: number;
}

export interface Comment {
comment_id: number;
post_id: number;
author: string;
body: string;
}
