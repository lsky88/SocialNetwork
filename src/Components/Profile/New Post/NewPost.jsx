import React from 'react';
import css from "./NewPost.module.css";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={css.newPost}>
                <textarea onChange={onPostChange} ref={newPostElement}
                          placeholder="What's on your mind?"
                          value={props.newPostText}/>
            <button onClick={onAddPost}>Add post</button>
        </div>
    )
}

export default NewPost;

