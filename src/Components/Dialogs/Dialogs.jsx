import css from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import React from "react";
import {
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../Redux/dialogsReducer";
// import NewMessage from "./NewMessage/NewMessage";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItems
        name={dialog.name} id={dialog.id}/>);

    let messagesElements = state.messages.map(message => <Messages
        message={message.message}/>);

    let newMessageBody = props.newMessageBody;

    let sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <section className={css.dialogs}>
            <section className={css.dialogsItems}>
                {dialogsElements}
            </section>

            <section className={css.messages}>
                {messagesElements}
                <section className={css.newMessage}>
            <textarea placeholder="Write your message"
                      value={newMessageBody}
                      onChange={onNewMessageChange}>
            </textarea>
                    <button onClick={sendMessage}>Send</button>
                </section>
            </section>
        </section>
    )
}

export default Dialogs;