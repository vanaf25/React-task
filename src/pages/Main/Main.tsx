import React, {useEffect, useState} from 'react';
import styles from './Main.module.css'
import {getPost, getPosts} from "../../api/postsApi";
import {Post as PostType} from "../../types/postsTypes";
import Post from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {getPostSelector, getPostsSelector, postsActions} from "../../store/postsReducer";
import useDebounce from "../../hooks/useDebounce";
import {useParams} from "react-router-dom";
import PostPage from "../PostPage/PostPage";
import searchIcon from './../../asests/search-icon.png'
const Main:React.FC = () => {
    const [isLoading,setIsLoading]=useState(false);
    const [term,setTerm]=useState("");
    const debouncedInputValue = useDebounce(term, 500); // Debounce the input value with a 500ms delay
    const posts=useSelector(getPostsSelector)
    const dispatch=useDispatch()
    const {id}=useParams();
    useEffect( ()=> {
        setIsLoading(true)
        if (id){
            getPost(+id).then(res=>res.json()).then(res=>{
                setIsLoading(false);
                dispatch(postsActions.getPost(res))
            })
        }
        else {
            getPosts(term).then(res => res.json()).then(res =>{
                setIsLoading(false);
                dispatch(postsActions.posts(res));
            })
        }
    },[debouncedInputValue,id]);
    return (
        <>
            {isLoading ? <p>Loading...</p>:
                <>
                    {id ?  <PostPage/>:<>
                        <h2 className={"center"}>Блог</h2>
                        <p className={"center"}>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
                        <div className={styles.searchContainer}>
                             <img className={styles.searchIcon} src={searchIcon} alt={"icon"}/>
                            <input value={term} onChange={(e)=>setTerm(e.target.value)} className={styles.searchInput} placeholder={"Поиск по названию статьи"} />
                        </div>
                        {isLoading ? <p>Loading...</p>:<div className={styles.postsContainer}>
                            {posts.map((post,index)=><Post fullWidth={index===0} post={post} />)}
                        </div>}
                    </>}
                </>
            }
        </>
    );
};
export default Main;