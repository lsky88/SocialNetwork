import css from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={css.post}>
            <div>
                <img src="" alt="ava"/>
            </div>
            <div>{props.post}</div>
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;