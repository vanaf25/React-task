import React from 'react';
import styles from './PostPage.module.css'
import {useSelector} from "react-redux";
import {getPostSelector} from "../../store/postsReducer";
import image from './../../asests/Image.png'
import back from './../../asests/back.svg'
import {Link} from "react-router-dom";
import Reactions from "../../components/Reactions/Reactions";
const PostPage:React.FC = () => {
    const post=useSelector(getPostSelector);
    return (
        <>
            {post &&  <div className={styles.post}>
                <div className={styles.post__header}>
                    <Link to={'/'}>
                        <img style={{marginRight:"10px"}} src={back} alt={"Icon"}/>
                            Вернутся назад
                    </Link>
                    <Reactions id={post.id}/>
                </div>
                <div>
                    <h1>{post.title}</h1>
                    <div className={styles.post__image_container}>
                        <img className={styles.post__image} src={image} height={477} alt={post.title}/>
                    </div>
                    <p>{post.body}</p>
                </div>
            </div>}
        </>
    );
};

export default PostPage;