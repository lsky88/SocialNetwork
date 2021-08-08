import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostAC());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextAC(text);
        props.store.dispatch(action)
    }

    return (
        <NewPost updateNewPostText={onPostChange} addPost={addPost}
                 newPostText={state.profilePage.newPostText}
                 posts={state.profilePage.posts}/>
    )
}

export default NewPostContainer;

