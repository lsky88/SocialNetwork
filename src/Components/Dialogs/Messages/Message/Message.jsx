import css from "./Message.module.css"

const Message = (props) => {
    return (
        <div className={css.message}><img src="" alt="ava"/>{props.message}
        </div>
    )
}

export default Message;