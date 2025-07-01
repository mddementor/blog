import heart from '../assets/heart.svg';
import { getDatePost} from "../utilits.ts";
import { Link} from "react-router-dom";

const DemoPost = ({post}: any ) => {

    return (
        <>
            <div className='demoPost'>
                <section className='main__demo'>
                    <div className='post_title'>
                        <Link to={`/articles/${post.slug}`}>
                            {post.title}
                        </Link>
                        <img className='likes_svg' src={heart}/>
                        {post.favoritesCount}
                    </div>
                    <div className='tags'>
                        {post.tagList}
                    </div>
                    <div className='demo_description'>
                        {post.description}
                    </div>
                </section>

                <section className='post-info'>
                    <div>
                        {post.author.username}<br/>
                        {getDatePost(post.createdAt)}
                    </div>
                    <img className='user_image' src={post.author.image}/>
                </section>
            </div>

        </>
    )
};

export default DemoPost;
