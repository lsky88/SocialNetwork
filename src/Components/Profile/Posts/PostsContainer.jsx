import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

const PostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    return <Posts posts={state.profilePage.posts}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default PostsContainer;