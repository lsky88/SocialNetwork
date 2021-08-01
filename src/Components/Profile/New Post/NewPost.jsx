import React from 'react';
import css from "./NewPost.module.css";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostAC());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextAC(text));
    }

    return (
        <div className={css.newPost}>
                <textarea onChange={onPostChange} ref={newPostElement}
                          placeholder="What's on your mind?"
                          value={props.newPostText}/>
            <button onClick={addPost}>Add post</button>

        </div>
    )
}

export default NewPost;

