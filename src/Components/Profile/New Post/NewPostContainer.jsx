import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";
import NewPost from "./NewPost";
import StoreContext from "../../../StoreContext";

const NewPostContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostAC());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextAC(text);
                        store.dispatch(action)
                    }
                    return <NewPost updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    newPostText={state.profilePage.newPostText}
                                    posts={state.profilePage.posts}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default NewPostContainer;

