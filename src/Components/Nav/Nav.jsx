import  css from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={css.nav}>
            <ul className={css.navList}>
                <li className={css.navItem}>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li className={css.navItem}>
                    <NavLink to="/dialogs">Messages</NavLink>
                </li>
                <li className={css.navItem}>
                    <NavLink to="#">News</NavLink>
                </li>
                <li className={css.navItem}>
                    <NavLink to="#">Music</NavLink>
                </li>
                <li className={css.navItem}>
                    <NavLink to="#">Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav