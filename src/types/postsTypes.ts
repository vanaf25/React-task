export interface Post{
    id:number,
    title:string,
    body:string,
    userId:number,
}
export interface Reaction{
    isLiked:boolean,
    isDisLiked:boolean
    disLikesCount:number
    likesCount:number,
    id:number
}