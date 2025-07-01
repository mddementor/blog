import { useParams } from "react-router-dom";
import {useEffect} from "react";
import { loadFullPost } from "../store/fullPostSlice";
import { useAppDispatch, useAppSelector } from "../utilits.ts";


const FullPost = () => {
    const { slug } = useParams();
    const dispatch = useAppDispatch();

    const fullPost  = useAppSelector((state) => state.fullPost.post)

    useEffect(() => {
        if(slug){
            dispatch(loadFullPost(slug))
        }
        }, [slug]);
    if(fullPost) {
        return (
            <div className='fullPost'>
                {fullPost.favoriteCount}<br/>
                {fullPost.article}<br/>
                {fullPost.author}<br/>
                {fullPost.tags}<br/>
                {fullPost.shortDescription}<br/>
                {fullPost.date}<br/>
                {fullPost.avatar}
            </div>
        )
    }
};
export default FullPost;