export interface PostResult {
    data: Post[];
    meta: Meta;
}

export interface Meta {
    page: number;
}

export interface Post {
    post_id: number;
    title: string;
    author: string;
    post_body: string;
    date: string;
    category: string;
}