import React from 'react';
import styles from './Post.module.css';
import image from './../../../asests/Image.png'
import {Post as PostType} from "../../../types/postsTypes";
import Reactions from "../../../components/Reactions/Reactions";
import {Link} from "react-router-dom";
const Post:React.FC<{post:PostType,fullWidth?:boolean}> = ({post,fullWidth}) => {

    return (
        <div className={`${fullWidth ? styles.post_big:""} ${styles.post}`}>
           <img src={image} className={styles.post__image_big}/>
            <div className={styles.cardContent}>
                <h2>{post.title}</h2>
                {fullWidth && <p>{post.body}</p>}
                <div className={styles.post__footer}>
                    <Reactions id={post.id} />
                    <Link to={`/${post.id}`}>
                        <button className={styles.post__footerButton}>

                            Читать далее
                        </button>   </Link>

                </div>
            </div>
        </div>
    );
};

export default Post;