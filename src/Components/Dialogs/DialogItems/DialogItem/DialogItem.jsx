import css from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={css.dialogsItem}>
            <NavLink to={path}>
                <img src="" alt="ava"/> {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;