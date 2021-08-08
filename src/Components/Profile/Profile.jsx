import css from "./Profile.module.css";
import NewPostContainer from "./New Post/NewPostContainer";
import PostsContainer from "./Posts/PostsContainer";

const profilePage = (props) => {

    return (
        <section className={css.profilePage}>
            <section className={css.ppHeading}>
                <div className={css.ppWallpaper}>
                    <img src="" alt="wallpaper"/>
                </div>
                <div className={css.ppAva}>
                    <img src="../../img/ava.jpeg" alt="ava"/>
                </div>
                <div className={css.ppBio}>
                    <h1>John Smith</h1>
                </div>
                <nav className={css.ppNav}>
                    <ul className={css.ppNavList}>
                        <li className={css.navItem}>
                            Post
                        </li>
                        <li className={css.navItem}>
                            About
                        </li>
                        <li className={css.navItem}>
                            Friends
                        </li>
                        <li className={css.navItem}>
                            Photos
                        </li>
                        <li className={css.navItem}>
                            Music
                        </li>
                        <li className={css.navItem}>
                            Settings
                        </li>
                    </ul>
                </nav>
            </section>
            <section className={css.ppContentBox}>
                <div className={css.ppContent}>
                    <div className={css.ppIntro}>
                        <h3>Intro</h3>
                    </div>
                    <div className={css.ppPhotos}>
                        <h3>Photos</h3>
                    </div>
                    <div className={css.ppFriends}>
                        <h3>Friends</h3>
                        <p>1 friend</p>
                        <div className={css.friendsItem}>
                            <img src="" alt="ava"/>
                            <h6>Ivan Ivanov</h6>
                        </div>
                    </div>
                </div>
                <div className={css.ppPostsBox}>
                    <NewPostContainer store={props.store}/>
                    <PostsContainer store={props.store}/>
                </div>
            </section>
        </section>
    )
}

export default profilePage;