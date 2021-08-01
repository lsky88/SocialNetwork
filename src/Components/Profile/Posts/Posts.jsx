import css from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {

    let postsElements = props.posts.map(post => <Post id={post.id}
                                                      post={post.message}
                                                      likesCount={post.likesCount}/>)

    return (
        <div className={css.posts}>
            <h3>Posts</h3>
            {
                postsElements
            }
        </div>
    )
}

export default Posts;