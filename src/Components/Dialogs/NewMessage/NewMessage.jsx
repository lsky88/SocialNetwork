import css from './NewMessage.module.css';
import {sendMessageAC, updateNewMessageBody} from "../../../Redux/State";

const NewMessage = (props) => {

    let newMessageBody = props.newMessageBody;

    let sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBody(body))
    }

    return (
        <section className={css.newMessage}>
            <textarea placeholder="Write your message"
                      value={newMessageBody}
                      onChange={onNewMessageChange}>
            </textarea>
            <button onClick={sendMessage}>Send</button>
        </section>
    )
}

export default NewMessage;