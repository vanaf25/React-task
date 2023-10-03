import React, {useState} from 'react';
import likeIcon from './../../asests/like.svg'
import disLikeIcon from './../../asests/dislike.svg'
import activeLike from './../../asests/like_active.svg';
import activeDisLike from './../../asests/dislike_active.svg'
import styles from './reactions.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getReactions, postsActions} from "../../store/postsReducer";
interface ReactionProps{

    id:number

}
const Reactions:React.FC<ReactionProps> = ({id
                                               }) => {
    const dispatch=useDispatch()
    const reaction=useSelector(getReactions).find(r=>r.id===id);
        const likeHandle=()=>{
            dispatch(postsActions.setLike(id))
        }
    const disLikeHandle=()=>{
        dispatch(postsActions.setDislike(id))
    }
    return (
        <div className={styles.container}>
            <div>
                {<img onClick={likeHandle} src={reaction?.isLiked ? activeLike:likeIcon} alt="like"/>}
                <span>{reaction?.likesCount}</span>
            </div>
            <div>
                <img onClick={disLikeHandle} src={reaction?.isDisLiked ? activeDisLike:disLikeIcon} alt="disLike"/>
                <span>{reaction?.disLikesCount}</span>
            </div>
        </div>
    );
};

export default Reactions;