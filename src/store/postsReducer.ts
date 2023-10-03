import {AppStateType, inferActionsType} from "./store";
import {Post, Reaction} from "../types/postsTypes";


const initialState={
 posts:[] as Post[],
  post:null as Post | null,
   reactions:[] as Reaction[],
}
export const dialogsReducer=(state=initialState,action:actionsType):InitialStateType=>{
    switch (action.type) {
        case "dialogs/setPosts": {
            const likesCount=Math.floor(Math.random() * 51);
            const disLikesCount=Math.floor(Math.random() * 51)
            const reactions:any[]=action.payload.map(p=>{
                if (state.reactions.find(r=>r.id===p.id)) return;
                return {
                    id:p.id,
                    likesCount,
                    disLikesCount,
                    isDisLiked:false,
                    isLiked:false
                }
              }).filter(r=>r);
            return {
                ...state, posts:action.payload,reactions:[...state.reactions,...reactions]
            }
        }
        case "dialogs/setPost":{
            let reactions=[...state.reactions]
            if (!state.reactions.find(r=>r.id===action.payload.id)){
                const likesCount=Math.floor(Math.random() * 51);
                const disLikesCount=Math.floor(Math.random() * 51)
              reactions=[...reactions,{id:action.payload.id,disLikesCount,isDisLiked:false,isLiked:false,likesCount}]
            }
            return  {
                ...state,post:action.payload,reactions
            }
        }
        case "dialogs/setLike":{
            return {
                ...state,reactions: state.reactions.map(p=>{
                    if (p.id===action.payload){
                        let count=p.isLiked ? --p.likesCount: ++p.likesCount
                        let isLiked=!p.isLiked
                        let disLikesCount=p.isDisLiked ? --p.disLikesCount:p.disLikesCount
                        return {...p,isLiked,likesCount:count,isDisLiked:false,disLikesCount}
                    }
                    return  p
                })
            }
        }
        case "dialogs/setDislike":{
            return  {...state,reactions:state.reactions.map(r=>{
                    if (r.id===action.payload){
                        let count=r.isDisLiked ? --r.disLikesCount:++r.disLikesCount
                        let isDisLiked=!r.isDisLiked
                        let likesCount=r.isLiked ? --r.likesCount:r.likesCount
                        return {...r,isDisLiked,disLikesCount:count,isLiked:false,likesCount}
                    }
                return r
                })}
        }
        default:{
            return state
        }
    }
}
export const postsActions={
    posts:(message:Post[])=>({type:"dialogs/setPosts", payload:message} as const),
    getPost:(message:Post)=>({type:"dialogs/setPost", payload:message} as const),
    setLike:(message:number)=>({type:"dialogs/setLike", payload:message} as const),
    setDislike:(message:number)=>({type:"dialogs/setDislike", payload:message} as const),
}
export const getPostsSelector=(store:AppStateType)=>store.posts.posts
export const getPostSelector=(store:AppStateType)=>store.posts.post
export const getReactions=(store:AppStateType)=>store.posts.reactions
export default dialogsReducer;
export type InitialStateType=typeof initialState;
type actionsType=inferActionsType<typeof postsActions >